import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PastryListComponent } from './pastry-list/pastry-list.component';
import { PastryListDetailsComponent } from './pastry-list-details/pastry-list-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { PastryService } from './pastry.service';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { SelectedMenuComponent } from './selected-menu/selected-menu.component';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { RegistrationFormReactiveComponent } from './registration-form-reactive/registration-form-reactive.component';


@NgModule({
  declarations: [
    AppComponent,
    PastryListComponent,
    PastryListDetailsComponent,
    NavigationBarComponent,
    RegistrationComponent,
    MenuComponent,
    SelectedMenuComponent,
    RegistrationComponent,
    RegistrationFormReactiveComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatPseudoCheckboxModule
  ],
  providers: [PastryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
