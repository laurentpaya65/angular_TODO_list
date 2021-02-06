import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { DonelistComponent } from './donelist/donelist.component';
import { DeletelistComponent } from './deletelist/deletelist.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    DonelistComponent,
    DeletelistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
