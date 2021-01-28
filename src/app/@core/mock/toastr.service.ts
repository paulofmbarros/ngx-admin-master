import { Injectable } from '@angular/core';
import {
  NbComponentStatus,
  NbGlobalLogicalPosition,
  NbGlobalPhysicalPosition,
  NbGlobalPosition,
  NbToastrService,
  NbToastrConfig,
} from '@nebular/theme';

@Injectable({
  providedIn: 'root'
})
export class ToastrService {

constructor(private toastrService: NbToastrService) { }

config: NbToastrConfig;

  index = 5;
  destroyByClick = true;
  duration = 0;
  hasIcon = true;
  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  preventDuplicates = false;
  status: NbComponentStatus = 'primary';

  title = 'HI there!';
  content = `I'm cool toaster!`;

  types: NbComponentStatus[] = [
    'primary',
    'success',
    'info',
    'warning',
    'danger',
  ];
  positions: string[] = [
    NbGlobalPhysicalPosition.TOP_RIGHT,
    NbGlobalPhysicalPosition.TOP_LEFT,
    NbGlobalPhysicalPosition.BOTTOM_LEFT,
    NbGlobalPhysicalPosition.BOTTOM_RIGHT,
    NbGlobalLogicalPosition.TOP_END,
    NbGlobalLogicalPosition.TOP_START,
    NbGlobalLogicalPosition.BOTTOM_END,
    NbGlobalLogicalPosition.BOTTOM_START,
  ];

  quotes = [
    { title: "ERROR", body: 'Something went wrong in one of sensores, please see on notifications' },
    { title: null, body: 'Titles are not always needed' },
    { title: null, body: 'Toastr rock!' },
  ];

  makeToast() {
    this.showToast(this.status, this.title, this.content);
  }


  showErrorToastr(){
    const typeIndex = 4;
    const quoteIndex = 0;
    const type = this.types[typeIndex];
    const quote = this.quotes[quoteIndex];
    this.showToast(type, quote.title, quote.body);



  }
  openRandomToast () {
    const typeIndex = Math.floor(Math.random() * this.types.length);
    const quoteIndex = Math.floor(Math.random() * this.quotes.length);
    const type = this.types[typeIndex];
    const quote = this.quotes[quoteIndex];

    this.showToast(type, quote.title, quote.body);
  }

  private showToast(type: NbComponentStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: this.destroyByClick,
      duration: this.duration,
      hasIcon: this.hasIcon,
      position: this.position,
      preventDuplicates: this.preventDuplicates,
    };
    const titleContent = title ? ` ${title}` : '';

    this.index += 1;
    this.toastrService.show(
      body,
      `${titleContent}`,
      config);
  }

}
