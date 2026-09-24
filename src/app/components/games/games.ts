import { Component } from '@angular/core';
import Project from '../../models/Project.model';
import GamesData from '@data/games.json';

@Component({
  selector: 'app-games',
  imports: [],
  templateUrl: './games.html',
  styleUrl: './games.css',
})
export class Games {
  games : Project[] = GamesData;
}
