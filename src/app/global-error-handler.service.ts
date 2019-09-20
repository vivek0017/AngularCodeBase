import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler{

  constructor(private injector: Injector) { }

  handleError(error: any){
    let router = this.injector.get(Router);
    console.log('URL :' + router.url);
    if(error instanceof HttpErrorResponse){

      //Backend return unsuccessful response codes such as 404, 500 etcc/
      //console.error('Backend returned status code:', error.status);
      console.log(error);      
    }
    else{
      //A client-side or network error occured.
      console.log(error);
    }
    router.navigate(['/error']);
  }
}
