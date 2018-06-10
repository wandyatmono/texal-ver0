import { Injectable } from '@angular/core';

@Injectable()
export class UtilityService {

    private styleTag: HTMLStyleElement;
    private style = document.createElement('style');
    public isDisable: Boolean = false;

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
                -webkit-touch-callout: none; /* iOS Safari */
                -webkit-user-select: none; /* Chrome/Safari/Opera */
                -khtml-user-select: none; /* Konqueror */
                -moz-user-select: none; /* Firefox */
                -ms-user-select: none; /* Internet Explorer/Edge*/
                user-select: none; /* Non-prefixed version, currently not supported by any browser */
            }
        `;

        return( this.style );
    }

}
