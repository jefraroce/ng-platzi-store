import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { DemoComponent } from './components/demo/demo.component';

const routes: Route[] = [
  {
    path: '',
    component: DemoComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
