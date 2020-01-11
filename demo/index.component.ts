import {Component} from "@angular/core";

@Component({
    selector:'app-index',
    templateUrl:'index.html'
})

export class IndexComponent {


    onConnect() {
        console.log("function called");
    }
}

