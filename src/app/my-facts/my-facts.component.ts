import { Component, OnInit } from '@angular/core';
import { Fact } from './../fact';
import { FactService } from './../fact.service';

@Component({
  selector: 'app-my-facts',
  templateUrl: './my-facts.component.html',
  styleUrls: ['./my-facts.component.css']
})
export class MyFactsComponent implements OnInit {

  facts : Fact[] = []; 

  constructor(private factService: FactService) { }

  ngOnInit(): void {
    this.getMyFacts();
  }

  getMyFacts():void{
    this.factService.getMyFacts()
      .subscribe(facts => this.facts = facts);
  } 
  
  removeFact(fact: Fact): void{
    const {text} = fact;
    const factIndex = this.facts.findIndex(f => f._id === fact._id);
    this.facts.splice(factIndex, 1);
    
    this.factService.removeFact(fact)
      .subscribe( _ => console.log(`Removed "${text}"`));
  }
}
