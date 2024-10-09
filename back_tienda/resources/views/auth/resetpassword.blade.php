@extends('layouts.mail')

@section('content')
    <div style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;">
        <h1>Restablecimiento de contraseña</h1>
        <p>Hola {{ $user->name }},</p>
        <p>Recibes este correo electrónico porque hemos recibido una solicitud para restablecer la contraseña de tu cuenta.</p>
        <p>
            <strong>Si no has solicitado el restablecimiento de contraseña, puedes ignorar este mensaje de correo electrónico.</strong>
        </p>
        <p>Para restablecer tu contraseña, haz clic en el siguiente enlace:</p>
        <p>
            <a href="{{ $resetUrl }}" style="background-color: #007BFF; color: #fff; display: inline-block; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Restablecer Contraseña</a>
        </p>
        <p>Si tienes problemas para hacer clic en el botón "Restablecer Contraseña", copia y pega la siguiente URL en tu navegador:</p>
        <p>{{ $resetUrl }}</p>
        <p>Este enlace de restablecimiento de contraseña caducará en {{ config('auth.passwords.'.config('auth.defaults.passwords').'.expire') }} minutos.</p>
        <p>Si no has solicitado un restablecimiento de contraseña, no es necesario realizar ninguna otra acción.</p>
        <p>¡Gracias por usar nuestra aplicación!</p>
    </div>
@endsection
