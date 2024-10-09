import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-return-policy',
  templateUrl: './return-policy.component.html',
  styleUrls: ['./return-policy.component.scss']
})
export class ReturnPolicyComponent implements OnInit {

  textoDevolucion: string = `

<p class="actualz"><strong>Última actualización: 1/9/2023</strong></p>

<p>En January29 Ecommerce, nos esforzamos por garantizar la satisfacción de nuestros clientes. Si al recibir un producto no estás completamente satisfecho o deseas realizar un cambio, te ofrecemos la posibilidad de realizar una devolución y obtener un cambio por otro producto de nuestra tienda.</p>

<h4>Plazo para Solicitar una Devolución:</h4>
<p>Tienes un plazo de 15 días a partir de la fecha de recepción del producto para solicitar una devolución. Después de ese plazo, no podremos aceptar devoluciones.</p>

<h4>Condiciones de los Productos:</h4>
<p>Para que la devolución sea aceptada, el producto debe encontrarse en su estado original, sin haber sido usado ni dañado. Debe incluir todos los accesorios, etiquetas y empaques originales.</p>

<h4>Proceso de Devolución:</h4>
<p>Si deseas realizar una devolución, por favor contáctanos a través de nuestro servicio de atención al cliente o envíanos un correo electrónico a devoluciones@storejanuary29.com. Te proporcionaremos instrucciones sobre cómo proceder y te proporcionaremos una etiqueta de envío para que nos devuelvas el producto.</p>

<h4>Reemplazo del Producto:</h4>
<p>Una vez que recibamos el producto devuelto y verifiquemos su estado, procederemos a enviarte el producto de reemplazo. Si el producto solicitado no está disponible en ese momento, te ofreceremos alternativas o un reembolso del importe correspondiente.</p>

<h4>Gastos de Envío:</h4>
<p>Los gastos de envío para devoluciones corren por cuenta del cliente, a menos que el motivo de la devolución sea un error de nuestra parte o un producto defectuoso.</p>

<h4>Excepciones:</h4>
<p>No aceptaremos devoluciones de productos personalizados o que hayan sido claramente usados o dañados por el cliente.</p>

<h4>Contacto:</h4>
<p>Si tienes alguna pregunta o duda sobre nuestra política de devolución, no dudes en ponerte en contacto con nosotros a través de nuestro servicio de atención al cliente o enviándonos un correo electrónico a info@storejanuary29.com.</p>

<p>Te agradecemos por confiar en January29 Ecommerce y esperamos brindarte una experiencia de compra satisfactoria.</p>
`;


  constructor() { }

  ngOnInit(): void {
  }

}
