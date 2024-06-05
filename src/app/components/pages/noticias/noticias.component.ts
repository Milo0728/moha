import { Component } from '@angular/core';
import { MaterialModule } from '../../../modules/material/material.module';
import { listNoticia } from '../../../data/noticias.data';
import { Router } from '@angular/router';

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

  constructor(
    private router: Router
  ) { }

  listNoticia = listNoticia;

  irNoticia(url: string) {
    this.router.navigate(['noticia/' + url]);
}
}
