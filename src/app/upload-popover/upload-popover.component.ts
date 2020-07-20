import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-upload-popover',
  templateUrl: './upload-popover.component.html',
  styleUrls: ['./upload-popover.component.scss'],
})
export class UploadPopoverComponent implements OnInit {

  constructor(public popover: PopoverController) { }

  ngOnInit() { }


}
