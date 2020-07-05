import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LocalComponent } from './components/local/local.component';
import { WorldComponent } from './components/world/world.component';

const routes: Routes = [{
  path:'',
  component: HomeComponent,
  // children:[{
  //   path:'',
  //   component: LocalComponent
  // },{
  //   path:'',
  //   component: WorldComponent
  // }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
