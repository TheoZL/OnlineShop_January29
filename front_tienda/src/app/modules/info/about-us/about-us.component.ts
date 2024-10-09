import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  textoSobreNosotros: string = `

<p>Somos una empresa familiar con una historia que se remonta a 2004. Fundada con pasión y determinación por Marco Tulio Sanchez Murillo y Carmen Lorena Mejia Quiros, nuestra empresa tiene como propósito principal satisfacer a nuestros clientes brindándoles la mejor atención y servicio en el mercado.</p>

<p>Lo que comenzó como un sueño en 2004 se ha convertido en una historia de éxito en el mundo de la moda. La visión de Marco Tulio y Carmen Lorena dio vida a una empresa que inicialmente ofrecía productos de vestimenta con un toque único. Con los años, nuestros hijos se unieron a nosotros para continuar el legado y expandir nuestra presencia en el mercado, manteniendo siempre los valores y la integridad que nos definieron desde el principio.</p>

<p>Nuestros valores se basan en ofrecer un servicio honrado y eficiente a nuestros valiosos clientes. Creemos en la importancia de establecer relaciones sólidas y duraderas, construidas sobre la confianza y la satisfacción mutua. Cada producto que ofrecemos es un testimonio de nuestra dedicación a la calidad y la autenticidad.</p>

<p>Nuestro equipo está conformado por individuos de confianza que comparten nuestra pasión y compromiso. Trabajamos juntos para garantizar que cada cliente experimente un servicio excepcional desde el momento en que nos conoce hasta la entrega de su producto.</p>

<p>Estamos comprometidos en ofrecer productos de la más alta calidad. Creemos que cada pieza que lleva nuestro sello debe cumplir con los estándares más rigurosos y reflejar la esencia de nuestra marca.</p>

<p>Uno de nuestros mayores logros es ofrecer precios competitivos sin comprometer la calidad. Nos enorgullece haber establecido un equilibrio entre la asequibilidad y la excelencia, permitiendo a nuestros clientes disfrutar de productos de alta calidad a precios accesibles.</p>

<p>Mirando hacia el futuro, aspiramos a convertirnos en una de las empresas de vestimenta más confiables y preferidas en el país. Continuaremos innovando y expandiendo nuestra oferta para cumplir con las expectativas cambiantes de nuestros clientes, siempre manteniendo nuestra dedicación a la calidad y al servicio incomparable que nos ha distinguido a lo largo de los años.</p>

<p>Agradecemos sinceramente a nuestros clientes por su continuo apoyo y confianza en nosotros. Juntos, seguiremos creciendo y creando un impacto en el mundo de la moda y más allá.</p>
`;

  constructor() { }

  ngOnInit(): void {
  }

}
