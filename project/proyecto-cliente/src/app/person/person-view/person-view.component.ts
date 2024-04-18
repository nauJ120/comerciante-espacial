import { Component, Input } from '@angular/core';
import { Person } from '../../model/person';
import { PersonService } from '../../shared/person.service';

@Component({
  selector: 'app-person-view',
  templateUrl: './person-view.component.html',
  styleUrl: './person-view.component.css'
})
export class PersonViewComponent {
  constructor(private personService: PersonService) {

  }

  @Input()
  set id(id: number) {
    console.log("id", id)
    this.personService.buscarPersona(id).subscribe(persona => this.person = persona);
  }

  person: Person = new Person(0, 0, 0, 0)
}
