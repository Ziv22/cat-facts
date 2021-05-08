import { Component, OnInit } from '@angular/core';
import { Fact } from './../fact';
import { FactService } from './../fact.service';


@Component({
  selector: 'app-all-facts',
  templateUrl: './all-facts.component.html',
  styleUrls: ['./all-facts.component.css']
})
export class AllFactsComponent implements OnInit {

  facts : Fact[] = []; 
  localFacts: string[] = [];

  constructor(private factService: FactService) { }

  ngOnInit(): void {
    this.getAllFacts();
    this.getLocalFacts();
  }

  getAllFacts():void{
    this.factService.getAllFacts()
      .subscribe(facts => this.facts = facts);
  }

  addFact(fact:Fact): void{    
    this.factService.addFact(fact)
    .subscribe(fact => console.log(`added "${fact.text}"`));
  }

  getLocalFacts(): void{
    this.localFacts = this.factService.getFromStorage();
  };

}
