import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  windowSelected = 'video'; // map, video-matrix

  constructor() { }

  onWindowSelected = new EventEmitter;
  selectWindow(window) {
    this.windowSelected = window;
    this.onWindowSelected.emit();
  }
}
