import { Component } from "@angular/core";
import {IProduct} from "./product";
import {ProductService} from "./product.service"
@Component({
   
    templateUrl:'app/Products/products.html',
        
    
})
export class ProductComponent {
    img:boolean;
    imageWidth:number=50;
    imageMargin:number=4;
    filteredProduct:IProduct[];
    _listFilter:string;


    constructor(private _ProductService:ProductService){
        this.filteredProduct=this.products;
        //this.listFilter='cart';
    }
    products:IProduct[];

    showhide() {
        console.log(this.img);
        this.img=!this.img;
        console.log(this.img);
    }

get listFilter() : string {
    return this._listFilter;
}

set listFilter(value:string){
    this._listFilter = value;
    
    this.filteredProduct= this.performFilter(value);
}

performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
          product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
          
}	

ngOnInit(): void {
    this._ProductService.getProducts()
    .subscribe(products => this.products= products,
    error => this.errorMessage= <any>error);
    }
}