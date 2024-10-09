import { Component, OnInit } from '@angular/core';



declare function alertDanger([]):any;
declare function alertSuccess([]):any;
declare var $:any;

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {
  
  texto: string = `

<p class="actualz"><strong>Última actualización: 1/9/2023</strong></p>

<p>Bienvenido a January29 Ecommerce. En esta Política de Privacidad, describimos cómo recopilamos, usamos y compartimos información en relación con nuestros servicios. Al utilizar nuestros servicios, usted acepta las prácticas descritas en esta política.</p>

<h4>Información que Recopilamos</h4>

<p>Recopilamos información que nos proporciona directamente, como su nombre, dirección, dirección de correo electrónico, número de teléfono y detalles de pago al realizar una compra en nuestra plataforma. También recopilamos información cuando se comunica con nuestro servicio de atención al cliente o cuando participa en encuestas o promociones.</p>

<h4>Uso de la Información</h4>

<p>Utilizamos la información recopilada para procesar sus pedidos, brindar soporte al cliente, mejorar nuestros servicios y personalizar su experiencia en nuestro sitio web. También podemos utilizar su información para enviarle comunicaciones promocionales y actualizaciones sobre nuevos productos y ofertas especiales, a menos que opte por no recibir dichas comunicaciones.</p>

<h4>Compartir de la Información</h4>

<p>No vendemos ni alquilamos su información personal a terceros. Sin embargo, podemos compartir su información con proveedores de servicios de confianza que nos asisten en la prestación de servicios, como el procesamiento de pagos y el envío de productos. También podemos compartir información en cumplimiento con la ley, para proteger nuestros derechos o seguridad, o con su consentimiento.</p>

<h4>Cookies y Tecnologías Similares</h4>

<p>Utilizamos cookies y tecnologías similares para mejorar su experiencia en nuestro sitio web. Estas tecnologías nos permiten reconocer su navegador y recopilar información sobre cómo utiliza nuestro sitio. Puede configurar su navegador para que rechace cookies, pero esto podría afectar su capacidad para utilizar ciertas características de nuestro sitio.</p>

<h4>Seguridad de la Información</h4>

<p>Tomamos medidas para proteger la información personal que recopilamos. Utilizamos protocolos de seguridad estándar para proteger la transmisión de datos sensibles, y mantenemos salvaguardias físicas y electrónicas para proteger su información.</p>

<h4>Sus Derechos</h4>

<p>Usted tiene el derecho de acceder, corregir, actualizar y eliminar su información personal. También puede optar por dejar de recibir comunicaciones promocionales. Póngase en contacto con nosotros a través de la información proporcionada al final de esta política para ejercer sus derechos.</p>

<h4>Cambios en esta Política</h4>

<p>Podemos actualizar esta Política de Privacidad ocasionalmente para reflejar cambios en nuestras prácticas o por otras razones. Le recomendamos que revise esta política periódicamente para mantenerse informado sobre cómo protegemos su información.</p>

<p>Si tiene preguntas sobre esta Política de Privacidad, comuníquese con nosotros a través de storejanuary29@gmail.com.</p>
`;





  constructor(

  ) { }

  ngOnInit(): void {
  }
  

}
