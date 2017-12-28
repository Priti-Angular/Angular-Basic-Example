import {NgModule} from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import{FormsModule} from "@angular/forms";
import{AppComponent} from "./app.component";
import{ProductComponent} from "../app/Products/products.component";
import{ProductDetailComponent} from "../app/Products/products-detaill.component";
import{WelcomeComponent} from "../app/Home/welcome.component";

import {ProductService} from "../app/Products/product.service";
import { HttpClientModule} from '@angular/common/http';
import { StarComponent} from '../app/feature/star.component';
import {RouterModule} from '@angular/router';

@NgModule ({
    imports :[BrowserModule, FormsModule,HttpClientModule,
        RouterModule.forRoot([
            { path: 'products', component: ProductComponent},
            { path: 'dashboard', component: WelcomeComponent},
            { path: 'products/:id', component: ProductDetailComponent},
    
        ], { useHash: true })
    ],
    declarations :[AppComponent,ProductComponent,ProductDetailComponent,WelcomeComponent,StarComponent],
    bootstrap:[AppComponent],
    providers:[ProductService],

})
export class AppModule {

}
