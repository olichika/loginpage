import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { DropdownComponent } from './dropdown/dropdown.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [DropdownComponent, HomeComponent],
  imports: [
    CommonModule,
    WelcomeRoutingModule
  ]
})
export class WelcomeModule { }
