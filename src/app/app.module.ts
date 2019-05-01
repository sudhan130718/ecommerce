import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule, BsDatepickerModule } from 'ngx-bootstrap';
import {RouterModule,Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateemployeeComponent } from './employees/createemployee.component';
import {FormsModule} from '@angular/forms';



const appRoutes :Routes = [
  {path:'list', component: ListEmployeesComponent},
  {path:'create', component: CreateemployeeComponent},
  {path:'', redirectTo: 'list', pathMatch: 'full'},
]

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateemployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule.forRoot(appRoutes),FormsModule,
    AlertModule.forRoot(),BsDatepickerModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
