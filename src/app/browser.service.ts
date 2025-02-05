import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrowserService {
  constructor(@Inject('navigator') private navigator: Navigator) {}

  isSafariMobile(): boolean {

    const userAgent = this.navigator.userAgent.toLowerCase();
    return /safari/.test(userAgent) && /iphone|ipod|ipad/.test(userAgent);
  }

  isFirefox(): boolean {
    const userAgent = this.navigator.userAgent.toLowerCase();
    return /firefox/.test(userAgent);
  }
}
