import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsComponent } from './components/charts/charts.component';
import { CountingComponent } from './components/counting/counting.component';
import { HomeComponent } from './components/home/home.component';
import { NormalModeComponent } from './components/normal-mode/normal-mode.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'charts', component: ChartsComponent
  },
  {
    path: 'counting', component: CountingComponent
  },
  {
    path: 'normal', component: NormalModeComponent
  },
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
