import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubtitulosComponent } from './subtitulos/subtitulos.component';
import { ListadoTareasComponent } from './listado-tareas/listado-tareas.component';



@NgModule({
  declarations: [
    SubtitulosComponent,
    ListadoTareasComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SubtitulosComponent,
    ListadoTareasComponent
  ]
})
export class TareasModule { }
