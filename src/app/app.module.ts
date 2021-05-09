import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllFactsComponent } from './all-facts/all-facts.component';
import { MyFactsComponent } from './my-facts/my-facts.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddFactComponent } from './add-fact/add-fact.component';

@NgModule({
  declarations: [
    AppComponent,
    AllFactsComponent,
    MyFactsComponent,
    AddFactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
