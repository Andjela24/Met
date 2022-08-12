import { Component, Input } from "@angular/core";
import { Room } from "../models/room";

@Component({
  selector: "app-room-list",
  templateUrl: "./room-list.component.html",
  styleUrls: ["./room-list.component.css"]
})
export class RoomListComponent {
  @Input() rooms: Room[];
  textSearch: string = "";

  randomize() {
    if (this.textSearch !== "") {
      alert(`Can't use randomize with search bar`);
      return;
    }
    let currentIndex = this.rooms.length;
    let randomIndex;
    let temp;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temp = this.rooms[currentIndex];
      this.rooms[currentIndex] = this.rooms[randomIndex];
      this.rooms[randomIndex] = temp;
    }
  }
}
