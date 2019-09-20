import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup } from '@angular/forms';
import { Country } from './country';
import { CountryService } from './country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  constructor(private countryService: CountryService) { }

  ngOnInit() {
  }

  countryForm = new FormGroup({
    name: new FormControl(),
    capital: new FormControl(),
    currency: new FormControl()
  })

  onFormSubmit(){

    let country =  this.countryForm.value;
    this.countryService.addCountry(country).subscribe(data=> {console.log(data);
    },err => {throw err;})
  }

}
