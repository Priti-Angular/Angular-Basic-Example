import { Component } from "@angular/core";

@Component({
    selector:'my-app',
    template:`
        <div><h2>Hello World!</h2>
        <h2> {{name}}</h2>
        <product-app></product-app>
        </div>
    `
})
export class AppComponent {
    name:string = "Preeti";

}