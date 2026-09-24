import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  messages = [
    ":3",
    "or Waffl for short",
    "press F5 to reroll message",
    "does not contain AI",
    "=^w^=",
    "real",
    "so true",
    "read if cute",
    "explodes",
    "awoooooooooooooooooo",
    "awoo",
    "⚝ <- star",
    "you thought that was the last one?"
  ]

  os = ""

  title = this.messages[Math.floor(Math.random()*this.messages.length)];

  addAwoo(){
    this.os=this.os+"o";
  }
}
