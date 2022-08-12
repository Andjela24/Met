import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoomItemComponent } from './room-item/room-item.component';
import { RoomListComponent } from './room-list/room-list.component';
import { FilterPipePipe } from './helpers/filter-pipe.pipe';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    RoomItemComponent,
    RoomListComponent,
    FilterPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

