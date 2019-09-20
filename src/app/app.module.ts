import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent }  from './app.component';
import { CountryComponent }  from './country/country.component';
import { PersonComponent }  from './person/person.component';
import { GlobalErrorComponent }  from './global-error-component';
import { PageNotFoundComponent }  from './page-not-found.component';
import { AppRoutingModule }  from './app-routing.module';
import { GlobalErrorHandlerService } from './global-error-handler.service';

@NgModule({
  imports: [     
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    CountryComponent,
    PersonComponent,
    GlobalErrorComponent,
    PageNotFoundComponent
  ],
  providers: [
    GlobalErrorHandlerService,
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService }    
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { } 