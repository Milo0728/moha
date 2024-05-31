import { Component } from '@angular/core';
import { MaterialModule } from '../../../modules/material/material.module';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [
    MaterialModule
  ],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css'
})
export class NoticiasComponent {

  listNoticia = [
    {
      titulo: "El Real Madrid se corona campeón de LaLiga 2023-2024",
      imagen: "../../../../assets/img/noticias/1.avif",
      fuente: "Marca",
      descripcion: "El conjunto blanco consiguió el título tras una victoria por 2-1 ante el Sevilla en la última jornada. El equipo merengue suma así su 35º campeonato liguero, distanciándose aún más de sus rivales.",
      url: "https://www.marca.com/futbol/real-madrid/2024/05/29/6833998.html"
    },
    {
      titulo: "El Barcelona termina segundo, con un sabor agridulce",
      imagen: "../../../../assets/img/noticias/2.avif",
      fuente: "AS",
      descripcion: "A pesar de conseguir el segundo puesto, el Barcelona no pudo alcanzar al Real Madrid en la lucha por el título. Los azulgranas cierran la temporada con la esperanza de un nuevo comienzo bajo la dirección de Xavi Hernández.",
      url: "https://as.com/futbol/barcelona/2024/05/29/6833978.html"
    },
    {
      titulo: "El Girona sorprende al finalizar tercero",
      imagen: "../../../../assets/img/noticias/3.webp",
      fuente: "Mundo Deportivo",
      descripcion: "El Girona ha sido la gran revelación de la temporada, logrando un meritorio tercer puesto en su regreso a LaLiga. El equipo catalán ha demostrado un fútbol alegre y efectivo, lo que le ha valido el reconocimiento de la afición y la crítica.",
      url: "https://www.mundodeportivo.com/noticias/girona-fc/20240529/4710467.html"
    },
    {
      titulo: "El Atlético de Madrid se queda fuera de la Champions League",
      imagen: "../../../../assets/img/noticias/4.webp",
      fuente: "AS",
      descripcion: "El Atlético de Madrid ha vivido una temporada decepcionante, finalizando cuarto en la clasificación y quedándose fuera de la Champions League por primera vez desde la temporada 2016-17.",
      url: "https://as.com/futbol/atletico-madrid/2024/05/29/6833967.html"
    },
  ]

  irNoticia(url: string) {
    window.open(url, "_blank")
  }
}
