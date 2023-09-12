import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { QuotePipe } from './pipes/format/quote.pipe';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './quiz/home/home.component';
import { FormsModule } from '@angular/forms';
import { QuizComponent } from './quiz/quiz/quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotePipe,
    HeaderComponent,
    HomeComponent,
    QuizComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
