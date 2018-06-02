import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterializeModule } from 'angular2-materialize';
import { ExperimentalModule } from './experimental/experimental.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    ExperimentalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
