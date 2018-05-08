import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { MovieComponent } from './movie/movie.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations:[AppComponent, MovieComponent],
  providers:[],
  imports:[BrowserModule, FormsModule],
  bootstrap:[AppComponent]
})
export class AppModule{

}