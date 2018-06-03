import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoremComponent } from './lorem/lorem.component';
import { SquareComponent } from './square/square.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoremComponent,
    SquareComponent
  ],
  exports: [
      LoremComponent,
      SquareComponent
  ],
})
export class ExperimentalModule { }
