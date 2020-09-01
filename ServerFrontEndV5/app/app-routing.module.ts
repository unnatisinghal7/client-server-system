import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessageComponent } from './message/message.component';
import { HomeserverComponent } from './homeserver/homeserver.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
 { path:'message', component:MessageComponent},
 {
   path:'register',component:RegisterComponent
 },
 {path:'x', redirectTo:''}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
