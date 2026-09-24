import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { NotFound } from './components/not-found/not-found';
import { Projects } from './components/projects/projects';
import { Games } from './components/games/games';

export const routes: Routes = [
    {path:'', component: Home},
    {path:'projects', component: Projects},
    {path:'games', component: Games},
    {path:'**', component: NotFound}
];
