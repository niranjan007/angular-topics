import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { InputdecoratorComponent } from './tutorials/inputdecorator/inputdecorator.component';


const routes: Routes = [
  {path: 'home', component : HomeComponent}, 
  {path: 'products', component : ProductDetailsComponent}, 
  {path: 'inputdecorator', component: InputdecoratorComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  })
export class AppRoutingModule { }
