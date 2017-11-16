import { Component} from '@angular/core';

@Component({
  selector: 'app-keyup',
  templateUrl: './keyup.component.html',
  styleUrls: ['./keyup.component.css']
})
export class KeyupComponent{
values='';
listItems=[];



addList(listItems:string){
  if(listItems){
    this.listItems.concat(listItems);
  }
}

}
