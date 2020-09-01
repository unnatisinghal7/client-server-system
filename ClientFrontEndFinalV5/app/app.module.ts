import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserScreenComponent } from './user-screen/user-screen.component';
import { LogoutComponent } from './logout/logout.component';
import { UserScreenService } from './user-screen/user-screen.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserScreenComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserScreenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
