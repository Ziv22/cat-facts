import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllFactsComponent } from './all-facts/all-facts.component';
import { MyFactsComponent } from './my-facts/my-facts.component';

const routes: Routes = [
  { path: '', redirectTo: '/all-facts', pathMatch: 'full' },
  { path: 'all-facts', component: AllFactsComponent },
  { path: 'my-facts', component: MyFactsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
