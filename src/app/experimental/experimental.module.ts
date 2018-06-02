import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoremComponent } from './lorem/lorem.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoremComponent
  ],
  exports: [
      LoremComponent
  ],
})
export class ExperimentalModule { }
