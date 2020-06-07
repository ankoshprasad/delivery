import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
{
    path: '',
    pathMatch: 'full',
    component: LoginComponent
  },
{
    path: 'home',
    component: HomeComponent
  }, 
  {
    path: 'UserManagement',
    component: UsermanagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
