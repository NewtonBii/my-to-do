import { Component} from '@angular/core';

@Component({
  selector: 'app-clickme',
  templateUrl: './clickme.component.html',
  styleUrls: ['./clickme.component.css']
})
export class ClickmeComponent{
clickMessage='';

addMessage(){
  this.clickMessage="Hey you clicked me";
}

}
