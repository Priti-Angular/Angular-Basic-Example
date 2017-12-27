import {NgModule} from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import{FormsModule} from "@angular/forms";
import{AppComponent} from "./app.component";
import{ProductComponent} from "../app/Products/products.component";
import {ProductService} from "../app/Products/product.service";

@NgModule ({
    imports :[BrowserModule, FormsModule],
    declarations :[AppComponent,ProductComponent],
    bootstrap:[AppComponent],
    providers:[ProductService],

})
export class AppModule {

}
