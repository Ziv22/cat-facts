import { Component, OnInit} from '@angular/core';
import { Fact } from './../fact';
import { v4 as uuid } from 'uuid';

import { FactService } from './../fact.service';
@Component({
  selector: 'app-add-fact',
  templateUrl: './add-fact.component.html',
  styleUrls: ['./add-fact.component.css']
})
export class AddFactComponent implements OnInit {
  newFact: string = '';
  facts: Fact[] = []; 

  constructor( private factService: FactService ) { }

  ngOnInit(): void {
    this.getFacts();
  }

  addFact(): void{
    const _id = uuid();
    const fact: Fact = {text: this.newFact, _id, added:true};
    this.facts.push(fact);
    this.factService.addFact(fact)
    .subscribe(fact => console.log(`added "${fact.text}"`));
    this.newFact = ""; 
  }

  getFacts(){
    this.factService.getMyFacts()
      .subscribe(facts => this.facts = facts);
  }

}
