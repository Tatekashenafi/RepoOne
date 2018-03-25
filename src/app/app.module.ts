import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {RouterModule} from "@angular/router"



import { AppComponent } from './app.component';
import { CorseComponent } from './corse/corse.component';
import { CourcesComponent } from './cources.component';
import { BooksComponent } from './books/books.component';
import { MoviesComponent } from './movies/movies.component';
import { FavoriteComponent } from '../../favorite.component';
import { MytestComponent } from './mytest/mytest.component';
import { GenersService } from './geners.service';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactMethodListService } from './contact-method-list.service';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    CorseComponent,
    CourcesComponent,
    BooksComponent,
    MoviesComponent,
    FavoriteComponent,
    MytestComponent,
    ContactFormComponent,
    NavbarComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'Movie' ,component:MoviesComponent},
      {path:'Book' ,component:BooksComponent}
    ])
  ],
  providers: [GenersService,ContactMethodListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
