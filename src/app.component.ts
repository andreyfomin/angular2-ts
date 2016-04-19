import {Component} from 'angular2/core';

@Component({
    selector: 'my-app11',
    template: `
    <h1>My App {{nameAppF}}</h1>
    <ul>
        <li *ngFor="#name of namesList">Hello {{ name }}</li>
    </ul>`
})
export class AppComponent {
    nameAppF:String;
    namesList:string[];

    constructor() {
        this.nameAppF = 'Felix';
        this.namesList = ['Ari', 'Carlos', 'Felipe', 'Nate'];
    }

}