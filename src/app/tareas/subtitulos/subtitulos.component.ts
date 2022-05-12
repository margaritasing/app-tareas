import { Component, OnInit } from '@angular/core';
import { TareasService } from '../services/tareas.service';

@Component({
  selector: 'app-subtitulos',
  templateUrl: './subtitulos.component.html',
  
})
export class SubtitulosComponent implements OnInit {

  constructor(private tareasService:TareasService) { }

  get tareas(){
    return this.tareasService.tareas.length; 
  }

  ngOnInit(): void {
  }

}
