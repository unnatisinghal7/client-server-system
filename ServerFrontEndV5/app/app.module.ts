import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeserverComponent } from './homeserver/homeserver.component';
import { MessageComponent } from './message/message.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { ClientlistService } from './register/clientlist.service';
import { HttpClientModule} from '@angular/common/http';
import { MessageService } from './message/message.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeserverComponent,
    MessageComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule



  ],
  providers: [ClientlistService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
