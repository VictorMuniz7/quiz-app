import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { QuotePipe } from './pipes/quote.pipe';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './quiz/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotePipe,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
