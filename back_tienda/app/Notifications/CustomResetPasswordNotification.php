<?php

namespace App\Notifications;

use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class CustomResetPasswordNotification extends Notification
{
    public $resetUrl;

    public function __construct($token, $email)
        {
            $frontendUrl = env('APP_FRONTEND_URL');
            $this->resetUrl = $frontendUrl . '/auth/reset-password?token=' . $token . '&email=' . $email;
        }

    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->line('Está recibiendo este correo electrónico porque recibimos una solicitud de restablecimiento de contraseña para su cuenta.')
            ->action('Restablecer la contraseña', $this->resetUrl)
            ->line('Si no solicitó un restablecimiento de contraseña, no es necesario realizar ninguna otra acción.');
    }

    public function via($notifiable)
    {
        return ['mail'];
    }
}
