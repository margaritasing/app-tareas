import { Injectable } from "@angular/core";
import { Tarea } from '../interfaces/tarea.interface';

@Injectable()
export class TareasService {
    tareas: Array<Tarea> = [
    {
        tarea:"Barrer",
        completada:false,
    },
    {
        tarea:"Trapear",
        completada:false,
    },
    {
        tarea:"Cocinar",
        completada:false,
    },
    {
        tarea:"Lavar",
        completada:false,
    }
    
    ];

    deleteTareas( nombreTarea: string){
        this.tareas = this.tareas.filter(tarea => tarea.tarea !== nombreTarea)
    }

    completeTarea(nombreTarea: string){
        const tarea: Tarea = this.tareas.find((tarea ) => {
            return tarea.tarea === nombreTarea;
        })!;
        
        tarea.completada = !tarea.completada;
    }


}