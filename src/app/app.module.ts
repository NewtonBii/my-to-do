import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { ListItemsComponent } from './list-items/list-items.component';
import { ClickmeComponent } from './clickme/clickme.component';
import { KeyupComponent } from './keyup/keyup.component';


@NgModule({
  declarations: [
    AppComponent,
    ListItemsComponent,
    ClickmeComponent,
    KeyupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
