import { Component} from '@angular/core';

@Component({
  selector: 'app-listado-tareas',
  templateUrl: './listado-tareas.component.html',

})
export class ListadoTareasComponent {
  tareas: Array<string> = ["Barrer", "Trapear", "Cocinar", "lavar"];

}
