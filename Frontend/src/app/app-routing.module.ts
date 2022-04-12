import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PastryListComponent } from './pastry-list/pastry-list.component';
import { PastryListDetailsComponent } from './pastry-list-details/pastry-list-details.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationFormReactiveComponent } from './registration-form-reactive/registration-form-reactive.component';
import { MenuComponent } from './menu/menu.component';
import { SelectedMenuComponent } from './selected-menu/selected-menu.component';

const routes: Routes = [
  {
    path:'pastry-list',
    component:PastryListComponent
  },
  {
    path:'pastry-list-details/:list_id',
    component:PastryListDetailsComponent
  },
  {
  path: 'registration-form',
  component: RegistrationComponent
  },
  {
  path:'registration-form-reactive',
  component:RegistrationFormReactiveComponent
  },
  {
    path:'menu',
    component: MenuComponent
  },
  {
    path:'selected-menu',
    component: SelectedMenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
