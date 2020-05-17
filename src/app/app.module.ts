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

const routes: Routes = [
  { path: 'home', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopbarComponent,
    FooterComponent,
    TopmenuComponent,
  ],
    
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
