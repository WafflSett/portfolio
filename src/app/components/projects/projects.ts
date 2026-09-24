import { Component } from '@angular/core';
import Project from '../../models/Project.model';
import ProjectsData from '@data/projects.json';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects : Project[] = ProjectsData;
}
