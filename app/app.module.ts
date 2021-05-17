import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { DataBindComponent } from './data-bind/data-bind.component';
import { EventdemoComponent } from './eventdemo/eventdemo.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { CalcComponent } from './calc/calc.component';
import { EmployShowComponent } from './employ-show/employ-show.component';
import { StudentShowComponent } from './student-show/student-show.component';
import { EmployDropdownComponent } from './employ-dropdown/employ-dropdown.component';
import { StudentDropdownComponent } from './student-dropdown/student-dropdown.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { SecondComponent } from './second/second.component';

/*
const appRoutes : Routes = [
  {path:'first',component:FirstComponent},
  {path:'calc',component:CalcComponent},
  {path:'data-bind',component:DataBindComponent},
  {path:'employ-show',component:EmployShowComponent},
  {path:'',component:MenuComponent},
  
]
*/

const appRoutes : Routes = [
  {path:'',component:LoginComponent},
  {path:'menu',component:MenuComponent,
  children : [
    {path:'first',component:FirstComponent,outlet:'data'},
    {path:'second',component:SecondComponent,outlet:'data'},
    {path:'eventdemo',component:EventdemoComponent,outlet:'data'},
    {path:'employ-show',component:EmployShowComponent,outlet:'data'},
     {path:'employ-dropdown',component:EmployDropdownComponent,outlet:'data'},
   ]
}
]


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
   
    DataBindComponent,
    EventdemoComponent,
    TwoWayComponent,
    CalcComponent,
    EmployShowComponent,
    StudentShowComponent,
    EmployDropdownComponent,
    StudentDropdownComponent,
    MenuComponent,
    LoginComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
