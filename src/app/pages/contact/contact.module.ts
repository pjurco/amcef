import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';


import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    MatDividerModule,
    MatCardModule,
  ]
})
export class ContactModule { }
