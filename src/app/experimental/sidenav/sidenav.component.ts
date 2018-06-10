import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { UtilityService } from '../../services/utility.service';

declare let $: any;
declare let jQuery: any;

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

    isCollapsed = true;
    x = 0;
    startX = 0;
    navIn = 0;
    navOut = 0;
    scrollbarWidth = 0;

    public keyboardEvent: any;
    public altKey: boolean;
    public charCode: number;
    public code: string;
    public ctrlKey: boolean;
    public keyCode: number;
    public keyIdentifier: string;
    public metaKey: boolean;
    public shiftKey: boolean;
    public timeStamp: number;
    public type: string;
    public which: number;

    constructor(
        private scrollService: ScrollService,
        private utilityService: UtilityService
    ) { }

    ngOnInit() {
        this.onResize();
        this.scrollbarWidth = this.scrollService.getScrollbarWidth();
    }

    onResize() {
        if (this.isCollapsed) {
            $('#stripes').css({right: 16});
            $('#sidenav').css({
                width: $(window).width(),
                height: $(window).outerHeight(),
                left: 16 - $(window).width(),
                top: 0
            });
            this.x = 16 - $(window).width();
        } else {
            $('#stripes').css({right: 0});
            $('#sidenav').css({
                width: $(window).width(),
                height: $(window).outerHeight(),
                left: 0,
                top: 0
            });
            this.x = 0;
        }
    }

    onTouchstart(event: any): void {
        this.utilityService.disable();
    }

    onTouchend(event: any): void {
        this.utilityService.enable();
    }

    onPanStart(event: any): void {
        event.preventDefault();
        $('#stripes').css({right: '0'});
        this.x = this.startX = parseInt($('#sidenav').css('left'), 10);
    }

    onPanMove(event: any): void {
        event.preventDefault();
        this.x = this.startX + event.deltaX;
    }

    onPanEnd(event: any): void {
        event.preventDefault();

        this.x = this.startX + event.deltaX;

        switch (event.direction) {
            case 2:
                this.slideOut();
                break;
            case 4:
                this.slideIn();
                break;
            default:
                if (event.direction === 1 && event.offsetDirection === 2) {
                    $('#stripes').css({right: '16px'});
                }
                $('#sidenav').velocity({ left: this.startX }, 200, 'ease');
        }
    }

    onKeyUp(event) {

        event.preventDefault();
        event.stopPropagation();

        this.keyboardEvent = event;
        this.altKey = event.altKey;
        this.charCode = event.charCode;
        this.code = event.code;
        this.ctrlKey = event.ctrlKey;
        this.keyCode = event.keyCode;
        this.keyIdentifier = event.keyIdentifier;
        this.metaKey = event.metaKey;
        this.shiftKey = event.shiftKey;
        this.timeStamp = event.timeStamp;
        this.type = event.type;
        this.which = event.which;

        switch (event.keyCode) {
          case 37:
            if (event.ctrlKey && event.shiftKey) {
                this.slideOut();
            }
            break;
          case 39:
            if (event.ctrlKey && event.shiftKey) {
                this.slideIn();
            }
            break;
        }
      }

    private slideOut() {
        this.navOut = 16 - (parseInt($(window).width(), 10));
        $('#stripes').css({right: '16px'});
        $('#sidenav')
            .velocity({ left: this.navOut }, 200, 'ease-out')
            .velocity({ left: this.navOut + 48 }, 150, 'ease-out')
            .velocity({ left: this.navOut }, 100, 'ease-out')
            .velocity({ left: this.navOut + 32 }, 75, 'ease-out')
            .velocity({ left: this.navOut }, 50, 'ease-out');
        this.isCollapsed = true;
        if (this.scrollService.isDisable) { this.scrollService.enable(); }
    }

    private slideIn() {
        this.navIn = 0;
        $('#stripes').css({right: 0});
        if (!this.scrollService.isDisable) { this.scrollService.disable(); }
        $('#sidenav')
            .velocity({ left: this.navIn }, 200, 'ease-in')
            .velocity({ left: this.navIn - 48 }, 150, 'ease-in')
            .velocity({ left: this.navIn }, 100, 'ease-in')
            .velocity({ left: this.navIn - 32 }, 75, 'ease-in')
            .velocity({ left: this.navIn }, 50, 'ease-in');
        this.isCollapsed = false;
    }
}
