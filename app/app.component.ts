import { Component } from "@angular/core";

@Component({
    selector:'my-app',
    template:`
        <div><h2>Hello World!</h2>
        <h2> {{name}}</h2>
        <ul class="nav navbar-nav">
        <li> <a [routerLink]="['/dashboard']">Dashboard</a></li>
            <li> <a [routerLink]="['/products']">Product-list</a></li>
        </ul>
        <router-outlet></router-outlet>
        </div>
    `
})
export class AppComponent {
    name:string = "Preeti";

}