import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PerfectStratPracticeComponent } from './components/perfect-strat-practice/perfect-strat-practice.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'perfect-strat', component: PerfectStratPracticeComponent
  }
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
