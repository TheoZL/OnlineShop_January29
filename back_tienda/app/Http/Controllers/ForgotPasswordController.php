<?php

namespace App\Http\Controllers;

use App\Notifications\CustomResetPasswordNotification;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;
use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\DB;

class ForgotPasswordController extends Controller
{
    use SendsPasswordResetEmails;

    public function showResetForm(Request $request, $token)
    {
        return view('auth.passwords.reset')->with(
            ['token' => $token, 'email' => $request->email]
        );
    }

    public function resetPassword(Request $request)
{
    try {
        $data = $request->json()->all();

        $validator = Validator::make($data, [
            'token' => 'required',
            'email' => 'required',
            'password' => 'required|min:8|confirmed',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        // Encuentra el registro en la tabla password_resets con el correo electrónico
        $passwordReset = DB::table('password_resets')->where('email', $data['email'])->first();

        if (!$passwordReset) {
            return response()->json(['error' => 'No se encontró ningún registro con este correo electrónico'], 404);
        }

        // Verifica si el token en texto plano coincide con el hash almacenado
        if (password_verify($data['token'], $passwordReset->token)) {
            // Token válido, puedes restablecer la contraseña
            $user = User::where('email', $data['email'])->first();
            $user->forceFill([
                'password' => $data['password']
            ])->save();

            // Elimina el registro de password_resets después de restablecer la contraseña
            DB::table('password_resets')->where('email', $data['email'])->delete();

            return response()->json(['message' => 'Password reset successful'], 200);
        } else {
            // Token no válido
            return response()->json(['error' => 'Token inválido' . $passwordReset->token], 400);
        }
    } catch (\Throwable $e) {
        return response()->json(['error' => 'Internal Server Error 2023' . $e], 500);
    }
}








    public function sendResetLinkEmail(Request $request)
{
    $this->validateEmail($request);

    // Encuentra el usuario por su dirección de correo electrónico
    $user = User::where('email', $request->email)->first();

    if (!$user) {
        return response()->json(['error' => 'No se encontró ningún usuario con esta dirección de correo electrónico'], 404);
    }

    // Crea el token de restablecimiento de contraseña para el usuario
    $token = $this->broker()->createToken($user);

    // Envía la notificación personalizada con el token
    $user->notify(new CustomResetPasswordNotification($token, $user->email));

    return response()->json(['message' => 'Reset link sent to your email.'], 200);
}




    protected function validateEmail(Request $request)
    {
        $request->validate(['email' => 'required|email']);
    }

    public function broker()
    {
        return Password::broker();
    }
}

