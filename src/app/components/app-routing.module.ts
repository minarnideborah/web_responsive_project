import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocialNetworkComponent } from './social-network/social-network.component';

const routes: Routes = [
  {
    path: 'socialnetworks',
    component: SocialNetworkComponent,
    data: {title: 'Social Networks'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
