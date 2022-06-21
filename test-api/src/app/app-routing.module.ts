import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { PlanetsComponent } from './planets/planets.component'
import { AboutUsComponent } from './about-us/about-us.component'
import { ContactComponent } from './contact/contact.component'

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'planets',
    component: PlanetsComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [

  ]
})
export class AppRoutingModule { }
