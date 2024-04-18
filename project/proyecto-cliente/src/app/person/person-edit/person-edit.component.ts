import { Component, Input } from '@angular/core';
import { Person } from '../../model/person';
import { PersonService } from '../../shared/person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrl: './person-edit.component.css'
})
export class PersonEditComponent {
  constructor(
    private personService: PersonService,
    private router: Router
  ) {

  }

  @Input()
  set id(id: number) {
    console.log("id", id)
    this.personService.buscarPersona(id).subscribe(persona => this.person = persona);
  }

  person: Person = new Person(0, 0, 0, 0)

  guardarPersona() {
    this.personService.guardarPersona(this.person).subscribe(person => console.log(person));
    this.router.navigate(['/person/list'])
  }
}
