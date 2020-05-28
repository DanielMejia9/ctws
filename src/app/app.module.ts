import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { FormsModule }  from '@angular/forms';
import { AppComponent } from './app.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopmenuComponent } from './components/topmenu/topmenu.component';
import { ViewsProductsComponent } from './components/views-products/views-products.component';
import { LoginComponent } from './components/login/login.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatTabsModule} from '@angular/material/tabs';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', component: HomeComponent },
  { path: 'productos/:id', component: ViewsProductsComponent },
  { path: 'login', component: LoginComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopbarComponent,
    FooterComponent,
    TopmenuComponent,
    ViewsProductsComponent,
    LoginComponent,
  ],
    
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ImageCropperModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
