import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'custom-drop-down';

  items = [
    { name: "Ferrari", id: "ferrari" },
    { name: "BMW", id: "bmw" },
    { name: "Mercedes", id: "mercedes" }
  ];
  bindLabel = "name";
  placeholder = "Choose an option";

  selectedItem(item) {
    console.log("item", item);
  }
}
