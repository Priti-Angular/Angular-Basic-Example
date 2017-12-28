import { Component, Input , OnChanges} from "@angular/core";

@Component({
    selector:'pm-star',
    templateUrl:'app/feature/star.component.html',
    styleUrls:['app/feature/star.component.css'],
        
    
})
export class StarComponent implements OnChanges{
    @Input() rating: number;
    starWidth:number;
    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }
 

}