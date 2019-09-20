import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PersonService } from './person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor(private personService: PersonService) { }

  personForm = new FormGroup({
    name: new FormControl(),
    city: new FormControl(),
    mobile: new FormControl(),
  });

  onFormSubmit(){
    let person = this.personForm.value;
    this.personService.addPerson(person)
    .subscribe(data => {
      console.log(data);
    })
  }
  
  ngOnInit() {
  }

}
