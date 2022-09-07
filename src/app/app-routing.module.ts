import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsComponent } from './components/charts/charts.component';
import { CountingComponent } from './components/counting/counting.component';
import { HomeComponent } from './components/home/home.component';
import { PerfectStratPracticeComponent } from './components/perfect-strat-practice/perfect-strat-practice.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'charts', component: ChartsComponent
  },
  {
    path: 'counting', component: CountingComponent
  }
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
