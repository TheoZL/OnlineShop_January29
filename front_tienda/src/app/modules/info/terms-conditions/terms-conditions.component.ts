import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.scss']
})
export class TermsConditionsComponent implements OnInit {


  textoTerminos: string = `

<p class="actualz"><strong>Última actualización: 1/9/2023</strong></p>

<p>Bienvenido a January29 Ecommerce. Estos términos y condiciones rigen el uso de nuestro sitio web y los servicios que ofrecemos. Al acceder y utilizar nuestro sitio, aceptas estos términos en su totalidad. Si no estás de acuerdo con estos términos, te recomendamos que no utilices nuestro sitio.</p>

<h4>Uso del Sitio:</h4>
<p>El contenido de este sitio es proporcionado con el propósito de brindar información sobre nuestros productos y servicios. No garantizamos la exactitud, integridad o actualidad de la información. El uso del contenido es bajo tu propio riesgo.</p>

<h4>Cuentas de Usuario:</h4>
<p>Al crear una cuenta en nuestro sitio, eres responsable de mantener la confidencialidad de tu información de inicio de sesión. Eres responsable de todas las actividades que ocurran bajo tu cuenta. Si tienes razones para creer que alguien está utilizando tu cuenta sin tu permiso, debes notificarnos de inmediato.</p>

<h4>Propiedad Intelectual:</h4>
<p>Todos los derechos de propiedad intelectual en el sitio y su contenido son propiedad de January29 Ecommerce o de sus licenciantes. Está prohibido copiar, reproducir, distribuir o utilizar de cualquier manera el contenido sin nuestro consentimiento por escrito.</p>

<h4>Enlaces a Terceros:</h4>
<p>Nuestro sitio puede contener enlaces a sitios web de terceros. No tenemos control sobre el contenido o las políticas de privacidad de estos sitios y no somos responsables de ellos.</p>

<h4>Limitación de Responsabilidad:</h4>
<p>En la medida permitida por la ley, January29 Ecommerce no será responsable por ningún daño directo, indirecto, incidental, especial o consecuente que resulte del uso o la imposibilidad de uso de nuestro sitio.</p>

<h4>Modificaciones:</h4>
<p>Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Las modificaciones serán efectivas inmediatamente después de su publicación en el sitio. Es tu responsabilidad revisar periódicamente los términos y condiciones para estar informado sobre las actualizaciones.</p>

<h4>Contacto:</h4>
<p>Si tienes preguntas sobre estos términos y condiciones, comunícate con nosotros a través de nuestro servicio de atención al cliente o enviándonos un correo electrónico a info@storejanuary29.com.</p>

<p>Te agradecemos por utilizar January29 Ecommerce y esperamos brindarte una experiencia de compra satisfactoria.</p>
`;



  constructor() { }

  ngOnInit(): void {
  }

}
