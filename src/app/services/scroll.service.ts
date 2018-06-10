import { Injectable } from '@angular/core';

@Injectable()
export class ScrollService {

    private styleTag: HTMLStyleElement;
    private style = document.createElement('style');
    public isDisable: Boolean = false;

    inner: any;
    outer: any;
    w1: number;
    w2: number;

    constructor() {
        this.styleTag = this.buildStyleElement();
    }

    public disable(): void {
        document.body.appendChild( this.styleTag );
        this.isDisable = true;
    }

    public enable(): void {
        document.body.removeChild( this.styleTag );
        this.isDisable = false;
    }

    private buildStyleElement(): HTMLStyleElement {

        this.style.type = 'text/css';
        this.style.textContent = `
            body {
                position: fixed; overflow-y:scroll;
            }
        `;

        return( this.style );
    }

    getScrollbarWidth() {
        this.inner = document.createElement('p');
        this.inner.style.width = '100%';
        this.inner.style.height = '200px';

        this.outer = document.createElement('div');
        this.outer.style.position = 'absolute';
        this.outer.style.top = '0px';
        this.outer.style.left = '0px';
        this.outer.style.visibility = 'hidden';
        this.outer.style.width = '200px';
        this.outer.style.height = '150px';
        this.outer.style.overflow = 'hidden';
        this.outer.appendChild(this.inner);

        document.body.appendChild(this.outer);
        this.w1 = this.inner.offsetWidth;
        this.outer.style.overflow = 'scroll';
        this.w2 = this.inner.offsetWidth;

        if (this.w1 === this.w2) {
            this.w2 = this.outer.clientWidth;
        }

        document.body.removeChild(this.outer);

        return (this.w1 - this.w2);
    }
}
