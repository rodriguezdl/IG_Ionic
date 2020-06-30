import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {PopoverController} from '@ionic/angular';

@Component({
    selector: 'app-popover',
    templateUrl: './popover.component.html',
    styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {
    user: string;

    @Output() userOutput: EventEmitter<any> = new EventEmitter();

    constructor(public popover: PopoverController) {
    }

    ngOnInit() {
    }

    passToParent() {
        this.userOutput.emit(this.user);
        console.log('POPOVER: ' + this.user);
    }
}
