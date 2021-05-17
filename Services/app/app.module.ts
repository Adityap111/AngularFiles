import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { EmployComponent } from './employ/employ.component';
import { EmploySearchComponent } from './employ-search/employ-search.component';
import { FormsModule } from '@angular/forms';
import { UserSearchComponent } from './user-search/user-search.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule, Routes } from '@angular/router';


const appRoutes : Routes = [
  {path:'',component:MenuComponent},
  {path:'menu',component:MenuComponent,
  children : [
    {path:'employ',component:EmployComponent,outlet:'data'},
  {path:'employ-search',component:EmploySearchComponent,outlet:'data'},
  {path:'user',component:UserComponent,outlet:'data'},
  {path:'user-search',component:UserSearchComponent,outlet:'data'},
     ]
    }
]



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    EmployComponent,
    EmploySearchComponent,
    UserSearchComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
