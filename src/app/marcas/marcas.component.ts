import { Component } from '@angular/core';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrl: './marcas.component.css'
})
export class MarcasComponent {
  marcas = [
    { nombre: 'SANGSIN BRAKE', imagen: 'assets/img/marcas/sangsin2-1-768x156.png', descripcion: 'Fabricante lider en la industria Coreana de piezas y partes para frenos de fricción, cuenta con más de 6 plantas a nivel mundial. Sangsin está equipado con las mejores tecnologías originales globalmente apreciadas y es suplidor OEM para Hyundai, Kia, GM Daewoo, SSangyong y Renault Samsung.' },
    { nombre: 'Mando', imagen: 'assets/img/marcas/mando2-1-768x208.png', descripcion: 'Mando Corporation pertenece al grupo Halla Holding y cuenta con 20 fabricas en el mundo, 16 centros de investigación y con más de 11,000 trabajadores.' },
  ];
}
