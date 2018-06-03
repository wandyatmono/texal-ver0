import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-square',
    templateUrl: './square.component.html',
    styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

    x = 0;
    y = 0;
    startX = 0;
    startY = 0;
    squareId = '';

    constructor() {
        this.squareId = 'square-' + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
    }

    ngOnInit() {
        this.x = 0;
        this.y = 0;
    }

    onPanStart(event: any): void {
        event.preventDefault();
        this.startX = this.x;
        this.startY = this.y;
    }

    onPanMove(event: any): void {
        event.preventDefault();
        this.x = this.startX + event.deltaX;
        this.y = this.startY + event.deltaY;
        this.onPress(event);
    }

    onPress(event: any): void {
        event.preventDefault();
        document.getElementById(this.squareId).classList.add('pulse');
    }

    onPressUp(event: any): void {
        event.preventDefault();
        document.getElementById(this.squareId).classList.remove('pulse');
    }

}
