import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllFactsComponent } from './all-facts/all-facts.component';
import { MyFactsComponent } from './my-facts/my-facts.component';
import { AddFactComponent } from './add-fact/add-fact.component';

const routes: Routes = [
  { path: '', redirectTo: '/all-facts', pathMatch: 'full' },
  { path: 'all-facts', component: AllFactsComponent },
  { path: 'my-facts', component: MyFactsComponent },
  { path: 'add-facts', component: AddFactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
