import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserScreenComponent } from './user-screen/user-screen.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouterGuardService } from './router-guard.service';

const routes: Routes = [
  {path:'userscreen',component:UserScreenComponent,canActivate:[RouterGuardService]},
  {path:'logout',component:LogoutComponent},
  {path:'',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
