import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { CountryComponent } from './country/country.component';
import { PersonComponent } from './person/person.component';
import { GlobalErrorComponent } from './global-error-component';
import { PageNotFoundComponent } from './page-not-found.component';


const routes: Routes = [
    {
        path: 'country', 
        component: CountryComponent
    },
    {
        path: 'person',
        component: PersonComponent
    },
    {
        path: 'error',
        component: GlobalErrorComponent
    },
    {
        path: '',
        redirectTo: 'country',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
]

@NgModule({
imports:[
    RouterModule.forRoot(routes)
],
exports:[
    RouterModule
]
})

export class AppRoutingModule{}