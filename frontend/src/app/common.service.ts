import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  windowSelected = 'video'; // map, video-matrix

  constructor() { }
}
