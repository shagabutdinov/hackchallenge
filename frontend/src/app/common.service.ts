import { Injectable, EventEmitter } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  windowSelected = 'video'; // map, video-matrix
  roomSelected = {};
  rooms = [];

  constructor(
    private http: HttpService
  ) {
    this.http.get(`assets/test_data/rooms.json`).subscribe(
      rooms => {
        console.log(rooms);
        this.rooms = rooms;
      }
    )
  }

  onWindowSelected = new EventEmitter;
  selectWindow(window) {
    this.windowSelected = window;
    this.onWindowSelected.emit();
  }
}
