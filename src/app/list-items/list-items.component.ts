import { Component} from '@angular/core';
@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent{
  tasks = [];
    addTask(newTask: string) {
      if (newTask) {
        this.tasks.push(newTask);
      }
    }
    

}
