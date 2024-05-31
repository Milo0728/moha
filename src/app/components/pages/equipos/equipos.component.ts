import { Component } from '@angular/core';
import { EquiposService } from '../../../services/equipos.service';
import { Equipo } from '../../../models/equipo.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-equipos',
  standalone: true,
  imports: [],
  templateUrl: './equipos.component.html',
  styleUrl: './equipos.component.css'
})
export class EquiposComponent {
  constructor(
    private equipoService: EquiposService,
    private router: Router
  ) { }

  listEquipo: Equipo[] = [];

  ngOnInit(): void {
    this.getEquipos();
  }

  getEquipos() {
    this.equipoService.getEquipos().subscribe((data: any) => {
      this.listEquipo = data;
      console.log(this.listEquipo);
      
    })
  }

  verEquipo(id: number) {

    const idEquipo = id;
    
    this.router.navigate(['/equipo', idEquipo]);

  } 
}
