import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Room } from "../models/room";

@Component({
  selector: "app-room-item",
  templateUrl: "./room-item.component.html",
  styleUrls: ["./room-item.component.css"]
})
export class RoomItemComponent {
  @Output() roomToDelete: EventEmitter<Room>;
  @Output() roomToChange: EventEmitter<Room>;
  @Input() room: any;

  constructor() {
    this.roomToDelete = new EventEmitter();
    this.roomToChange = new EventEmitter();
  }

  public deleteRoom(): void {
    this.roomToDelete.emit(this.room);
  }

  public changeRoom(): void {
    this.roomToChange.emit(this.room);
  }
}
