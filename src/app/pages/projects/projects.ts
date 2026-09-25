import { Component } from '@angular/core';
import Project from '../../models/Project.model';
import ProjectsData from '@data/projects.json';
import { ProjectCard } from '../../components/project-card/project-card';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects : Project[] = ProjectsData;
}
