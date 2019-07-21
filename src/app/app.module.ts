import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './components/app-routing.module';
import { AppComponent } from './app.component';
import { SocialNetworkComponent } from './components/social-network/social-network.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { HttpClientModule } from '@angular/common/http'; //add 1
@NgModule({
  declarations: [
    AppComponent,
    SocialNetworkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule
    
     //add2
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
