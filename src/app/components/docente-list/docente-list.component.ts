import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Docente } from 'src/app/models/docente';
import { DocenteService } from '../../services/docente.service';

@Component({
  selector: 'app-docente-list',
  templateUrl: './docente-list.component.html',
  styleUrls: ['./docente-list.component.scss']
})
export class DocenteListComponent implements OnInit{
  displayedColumns: string[] = ['id', 'nombre', 'email', 'telefono', 'especialidad', 'acciones'];
  docentes: Docente[] = [];

  constructor(private docenteService: DocenteService, private router: Router) { }

  ngOnInit(): void {
    this.loadDocentes();
  }

  loadDocentes(): void {
    this.docenteService.getDocentes().subscribe(data => {
      this.docentes = data;
    });
  }

  editDocente(id: number): void {
    this.router.navigate([`/edit-docente/${id}`]);
  }

  deleteDocente(id: number): void {
    this.docenteService.deleteDocente(id).subscribe(() => {
      this.loadDocentes();
    });
  }

  addDocente(): void {
    this.router.navigate(['/add-docente']);
  }

}
