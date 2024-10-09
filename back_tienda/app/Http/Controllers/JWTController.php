<?php

namespace App\Http\Controllers;

use Auth;
use Validator;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;


class JWTController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login','loginAdmin','loginEcommerce', 'register','forgotPassword','resetPassword']]);
        
    }

    /**
     * Register user.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|min:2|max:100',
            'email' => 'required|string|email|max:100|unique:users',
            'password' => 'required|string|min:6',
        ]);

        if($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'lastname' => $request->lastname,
                "type_user" => $request->type_user,
                'password' => $request->password
            ]);
        return response()->json([
            'message' => 'User successfully registered',
            'user' => $user
        ], 201);
    }

    /**
     * login user
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function loginAdmin(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        if (!$token = auth('api')->attempt(["email" => $request->email , "password" => $request->password , "state" => 1 , "type_user" => 2])) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->respondWithToken($token);
    }

    //login para la tienda solamente
    //login para la tienda solamente
    public function loginEcommerce(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        // if ($request->type_user != 1 || !$request->type_user != 2) {
        //     return response()->json(['error' => 'Unauthorized - Invalid user type'], 401);
        // }
        // , "type_user" => 1
        if (!$token = auth('api')->attempt(["email" => $request->email , "password" => $request->password, "state" => 1 ])) {
            //si no cumple responde Unauthorized con valor 401
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->respondWithToken($token);
    }

    /**
     * Logout user
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth('api')->logout();

        return response()->json(['message' => 'User successfully logged out.']);
    }

    /**
     * Refresh token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth('api')->refresh());
    }

    /**
     * Get user profile.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function profile()
    {
        return response()->json(auth('api')->user());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        $user = auth('api')->user()->load('role');
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth('api')->factory()->getTTL() * 180,
            "user" => [
                "id" => $user->id,
                "name" => $user->name,
                "surname" => $user->lastname,
                "email" => $user->email,
                "role" => $user->role,
            ],
        ]);
    }



    

    //RECUPERAR CONTRASEñA
    public function forgotPassword(Request $request)
{
    $request->validate(['email' => 'required|email']);

    $response = $this->broker()->sendResetLink(
        $request->only('email')
    );

    return $response == Password::RESET_LINK_SENT
        ? response()->json(['message' => 'Reset link sent to your email.'], 200)
        : response()->json(['error' => 'Unable to send reset link.'], 400);
}

// Método para restablecer la contraseña
public function resetPassword(Request $request)
{
    $request->validate([
        'token' => 'required',
        'email' => 'required|email',
        'password' => 'required|confirmed|min:8',
    ]);

    $response = $this->broker()->reset(
        $request->only('email', 'password', 'password_confirmation', 'token'),
        function ($user, $password) {
            $user->forceFill([
                'password' => Hash::make($password)
            ])->save();

            event(new PasswordReset($user));
        }
    );

    return $response == Password::PASSWORD_RESET
        ? response()->json(['message' => 'Password reset successful'], 200)
        : response()->json(['error' => 'Unable to reset password'], 400);
}

public function broker()
{
    return Password::broker();
}

}
