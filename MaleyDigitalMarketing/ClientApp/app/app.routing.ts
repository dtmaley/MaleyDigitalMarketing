// app.routing.ts
import { NgModule } from '@angular/core';  
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from "./components/about/about.component";
import { ProfilesComponent } from "./components/profiles/profiles.component";

const routes: Routes = [
    { path: '', redirectTo: 'profiles', pathMatch: 'full' },
    { path: 'profiles', component: ProfilesComponent },
    { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [ProfilesComponent, AboutComponent]; 
