import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { AddRestoComponent } from './component/add-resto/add-resto.component';
import { HomeComponent } from './component/home/home.component';
import { ListRestoComponent } from './component/list-resto/list-resto.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { UpdateRestoComponent } from './component/update-resto/update-resto.component';


const routes: Routes = [
  {path: 'home',component:HomeComponent},
  {path: 'aboutus',component:AboutComponent},
  {path: 'register',component:RegisterComponent},
  {path: 'login',component:LoginComponent},
  {path: 'add',component:AddRestoComponent},
  {path: 'update/:id',component:UpdateRestoComponent},
  {path: 'list',component:ListRestoComponent},
  {path: '**',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
