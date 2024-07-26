import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DocenteService } from '../../services/docente.service';

@Component({
  selector: 'app-docente-form',
  templateUrl: './docente-form.component.html',
  styleUrls: ['./docente-form.component.scss']
})
export class DocenteFormComponent implements OnInit{
  docenteForm!: FormGroup;
  id: any | null;
  isEditMode = false;
  docenteId: number;
  public message: string;
  public status: string;

  constructor(
    private fb: FormBuilder,
    private docenteService: DocenteService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.docenteId = 0;
    this.message = "";
    this.status = "";
    this.docenteForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required],
      especialidad: ['', Validators.required]
    });
    this.id = this.route.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    console.log(this.id);
    if (this.id) {
      this.loadDocenteData(+this.id);
    }
  }

  loadDocenteData(id: number): void {
    this.docenteService.getDocenteById(id).subscribe(data => {
      if (data) {
        console.log(data);
        this.docenteForm.patchValue(data);
      }
    });
  }

  onSubmit(): void {
    if (this.docenteForm.valid) {
      if (this.id) {
        console.log(this.id);
        // Lógica para actualizar docente
        this.docenteService.updateDocente(this.id, this.docenteForm.value).subscribe(() => {
          this.router.navigate(['/docentes']);
        });
      } else {
        // Lógica para crear nuevo docente
        this.docenteService.createDocente(this.docenteForm.value).subscribe(() => {
          this.router.navigate(['/docentes']);
        });
      }
    }
  }

  onCancel(): void {
    this.router.navigate(['/docentes']);
  }
}
