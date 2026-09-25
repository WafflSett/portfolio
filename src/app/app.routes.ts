import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { NotFound } from './pages/not-found/not-found';
import { Projects } from './pages/projects/projects';
import { Games } from './pages/games/games';

export const routes: Routes = [
    {path:'', component: Home},
    {path:'projects', component: Projects},
    {path:'games', component: Games},
    {path:'**', component: NotFound}
];
