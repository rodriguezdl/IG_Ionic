import {Component, OnInit} from '@angular/core';
import {ActionSheetController, PopoverController} from '@ionic/angular';
import {Camera} from '@ionic-native/camera/ngx';
import {CameraOptions, CameraResultType} from '@capacitor/core';


@Component({
  selector: 'app-upload-popover',
  templateUrl: './upload-popover.component.html',
  styleUrls: ['./upload-popover.component.scss'],
})
export class UploadPopoverComponent implements OnInit {

  constructor(public popover: PopoverController, private camera: Camera, private actionSheetController: ActionSheetController) { }

  ngOnInit() { }


  //       }
  //     }
  //   })
  // }

  // Handles encoding of img when picked
  pickImage(sourceType) {
    const options: CameraOptions = {
      quality: 100,
      source: sourceType,
      resultType: CameraResultType.Base64,
      saveToGallery: false,
    };
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      // let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }

  // Call action sheet from OS
  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Select Image source',
      buttons: [{
        text: 'Load from Library',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Use Camera',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.CAMERA);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
      ]
    });
    await actionSheet.present();
  }
}
