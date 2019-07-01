import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ClientListComponent} from './clients/client-list/client-list.component';

const routes: Routes = [
  { path: 'clients', component: ClientListComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: 'clients', pathMatch: 'full' }
];

@NgModule({
  imports: [
      RouterModule.forRoot(
          routes,
          { enableTracing : true }
          )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
