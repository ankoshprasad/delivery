import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { LoginComponent } from './login/login.component';
import {HttpModule} from '@angular/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FooterComponent } from './shared/footer/footer.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [ 
    AppComponent,
    UsermanagementComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent

  ],
  imports: [
   NgbModule,
    BrowserModule,
    AppRoutingModule,
	HttpModule,
	FormsModule,
	Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
