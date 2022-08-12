import { Component } from "@angular/core";
import { Room } from "./models/room";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "DZ05";

  name: string;
  description: string;
  price: number;
  imgPath: string;

  rooms = [
    new Room(
      "Room 1,",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      30,
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/178822913.jpg?k=c75776a0d42872651c3b2786c09b019b706f5c9165f9051b48fa8fafb982d93b&o=&hp=1"
    ),
    new Room(
      "Room 2,",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      80,
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/178827561.jpg?k=df1b77b64ebd01eda5532c72a542106ccd8930cebd2c18b113ee57618c895871&o=&hp=1"
    ),
    new Room(
      "Room 3,",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      50,
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/71426844.jpg?k=b9b9d3bce9316ab3260b23affe70729a6644de9c6e7bb52ff4c345e136166abc&o=&hp=1://cf.bstatic.com/images/hotel/max1024x768/180/180503648.jpg"
    )
  ];

  addRoom(name, description, price, imgPath) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.imgPath = imgPath;
    this.rooms.push(new Room(name, description, price, imgPath));
  }
}
