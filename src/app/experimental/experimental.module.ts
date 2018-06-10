import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoremComponent } from './lorem/lorem.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoremComponent,
    SidenavComponent
  ],
  exports: [
      LoremComponent,
      SidenavComponent
  ]
})
export class ExperimentalModule { }
