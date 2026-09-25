import { Component } from '@angular/core';
import Project from '../../models/Project.model';
import GamesData from '@data/games.json';
import { ProjectCard } from '../../components/project-card/project-card';

@Component({
  selector: 'app-games',
  imports: [ProjectCard],
  templateUrl: './games.html',
  styleUrl: './games.css',
})
export class Games {
  games : Project[] = GamesData;
}
