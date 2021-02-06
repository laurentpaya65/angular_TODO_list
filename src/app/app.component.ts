import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  /* le role du component parent
     sera d'avoir les données

    Les enfants vont se sourcer ici
  */

  todolist:string[] = [
    "component",
    "directive",
    "modules"
  ];

  donelist:string[] = [
    "state appli"
  ];

  deletelist:string[];

  tache:string;

  addTask() {
    let tache=prompt("Entrez une tache");
    if (tache != null && tache.trim().length > 0) {

      this.todolist.unshift(tache);
    }
  }
  onDoneEventTodolist(event) {
    // event vaut la valeur de la donnée
    console.log(this.todolist[event]);
    // let index = this.todolist.indexOf(event);
    // ajout dans donelist[]
    this.donelist.unshift(this.todolist[event]);
    // suppression dans todolis[]
    this.todolist.splice(event,1);
  }
  onDoneEventDonelist(event) {
    console.log("tache",event);
    let index = this.donelist.indexOf(event);
    this.todolist.unshift(event);
    this.donelist.splice(index,1);
    
    
  }
  onDeleteEventDonelist(event) {
    let index = this.donelist.indexOf(event);
    this.donelist.splice(index,1);
  }

}
