import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {AuthGuardService as AuthGuard} from './shared/services/AuthGuard.service';

const routes: Routes = [

{ path: '', redirectTo: '/home', pathMatch: 'full' },

{ path: 'home', component: HomeComponent },

{ path: 'dashboard', loadChildren: () => import('./child/child.module').then(m => m.ChildModule), canLoad:[AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
