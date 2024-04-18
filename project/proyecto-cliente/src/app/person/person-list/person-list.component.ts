import { Component } from '@angular/core';
import { Person } from '../../model/person';
import { PersonService } from '../../shared/person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.css'
})
export class PersonListComponent {


  persons: Person[] = [];

  constructor(
    private personService: PersonService,
  ) { }

  ngOnInit(): void {
    this.personService.listarPersonas().subscribe(personas => this.persons = personas)
  }
}
