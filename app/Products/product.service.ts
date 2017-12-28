import {IProduct} from './product';
import {Injectable} from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class ProductService{

    private _productUrl= '/api/products/products.json';

    constructor(private _http: HttpClient) { }
    getProducts(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this._productUrl)
        .do(data => console.log('All: '+ JSON.stringify(data)))
        .catch(this.handleError);
        }

 private handleError(err: HttpErrorResponse) {
     console.error(err.message);
     return Observable.throw(err.message);
        }
/*    getProducts() :IProduct[] {
        return [
            {
                "productId": 2,
                "productName": "Garden Cart",
                "productCode": "GDN-0023",
                "releaseDate": "March 18, 2016",
                "description": "15 gallon capacity rolling garden cart",
                "price": 32.99,
                "starRating": 4.2,
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
            },
            {
                "productId": 5,
                "productName": "Hammer",
                "productCode": "TBX-0048",
                "releaseDate": "May 21, 2016",
                "description": "Curved claw steel hammer",
                "price": 8.9,
                "starRating": 4.8,
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
            }
            {
                "productId": 7,
                "productName": "Computer",
                "productCode": "TBX-0048",
                "releaseDate": "June 5, 2016",
                "description": "Curved claw steel hammer",
                "price": 88.95,
                "starRating": 5,
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
            }


        ]

    }*/
}



