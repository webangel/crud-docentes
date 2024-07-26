import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocenteFormComponent } from './components/docente-form/docente-form.component';
import { DocenteListComponent } from './components/docente-list/docente-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/docentes', pathMatch: 'full' },
  { path: 'docentes', component: DocenteListComponent },
  { path: 'add-docente', component: DocenteFormComponent },
  { path: 'edit-docente/:id', component: DocenteFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
