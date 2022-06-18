import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { InputdecoratorComponent } from './tutorials/inputdecorator/inputdecorator.component';
import { ParentcompComponent } from './tutorials/parentcomp/parentcomp.component';
import { ChildcompComponent } from './tutorials/childcomp/childcomp.component';
import { VehicalService } from './tutorials/vehical.service';
import { CarService } from './tutorials/car.service';
import { BusService } from './tutorials/bus.service';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    HomeComponent,
    ProductDetailsComponent,
    ProductListComponent,
    InputdecoratorComponent,
    ParentcompComponent,
    ChildcompComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
  // {
  //   provide : VehicalService,
  //   useClass : BusService
  // },
  // {
  //   provide : VehicalService,
  //   useExisting : CarService
  // }
  // {
  //   provide : VehicalService,
  //   useValue : 
  // }

 ],
  bootstrap: [AppComponent],
})
export class AppModule { }
