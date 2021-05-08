import { Injectable } from '@angular/core';
import { Observable,throwError ,of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Fact } from './fact';
import { FACTS } from './mock-facts';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FactService {
  private baseUrl: String = `http://localhost:8080/`;
  private allFactsUrl = `${this.baseUrl}allFacts`;
  private myFactsUrl = `${this.baseUrl}myFacts`;
  private addFactsUrl = `${this.baseUrl}myFact`;
  private removeFactsUrl = `${this.baseUrl}myFact`;


  constructor(private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  getAllFacts(): Observable <Fact[]>{
    return this.http.get<Fact[]>(this.allFactsUrl)
      .pipe(
        catchError(this.handleError<Fact[]>('getAllFacts', []))
      )
  }

  getMyFacts(): Observable <Fact[]>{
    return this.http.get<Fact[]>(this.myFactsUrl)
      .pipe(
        catchError(this.handleError<Fact[]>('getMyFacts', []))
      )
  }


  addFact(fact: Fact): Observable<Fact>{
    this.addToStorage(fact._id);        
    return this.http.post<Fact>(this.addFactsUrl, fact, this.httpOptions)
    .pipe(
      catchError(this.handleError('addFact', fact))
    );
  }

  removeFact(fact: Fact): Observable<Fact>{
    this.removeFromStorage(fact._id);
    return this.http.delete<Fact>(`${this.removeFactsUrl}/${fact._id}`, this.httpOptions)
    .pipe(
      catchError(this.handleError('addFact', fact))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  getFromStorage() :string[] {
    let facts: any = localStorage.getItem("localFacts");
    return JSON.parse(facts);
  }

  saveToStorage(facts: string[]) :void {
    const stringified = JSON.stringify(facts);
    localStorage.setItem("localFacts", stringified);
  }

  addToStorage(factId: any): void{
    let  facts: any = this.getFromStorage();
    
    if(facts){
      facts.push(factId);
    } else {
      facts = []; 
      facts.push(factId);
    }
    this.saveToStorage(facts);
  }

  removeFromStorage(factId: any): void{
    let  facts: any = this.getFromStorage();    
    if(facts){
      const factIndex = facts.findIndex((f: string )=> f === factId)
      facts.splice(factIndex, 1);
      this.saveToStorage(facts);
    }

  
  }


}
