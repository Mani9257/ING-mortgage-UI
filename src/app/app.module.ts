import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


//Third party libraries
import { ToastModule } from 'primeng/toast';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { HomeComponent } from './home/home.component';
import { MortgageloanComponent } from './mortgageloan/mortgageloan.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    MortgageloanComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ToastModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
