import { Injectable, EventEmitter } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  windowSelected = 'video'; // video-matrix
  videoMatrixSet = 'all';

  rooms: any[] = [];
  roomSelected: any = {};

  cameras: any[] = [];
  cameraSelected: any = {};

  constructor(
    private http: HttpService
  ) {
    this.http.get(`/events/rooms.json`).subscribe(
      rooms => {
        console.log(rooms);
        this.rooms = rooms;
      }
    );

    this.http.get(`assets/test_data/cameras.json`).subscribe(
      cameras => {
        console.log(cameras);
        this.cameras = cameras;
      }
    );

  }

  onWindowSelected = new EventEmitter;
  selectWindow(window) {
    this.windowSelected = window;
    this.onWindowSelected.emit();
  }

  matrixSetUpdated = new EventEmitter;
  updateMatrixSet(set) {
    this.videoMatrixSet = set;
    this.matrixSetUpdated.emit();
  }
}
