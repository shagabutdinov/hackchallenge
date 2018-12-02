import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-video-matrix',
  templateUrl: './video-matrix.component.html',
  styleUrls: ['./video-matrix.component.scss']
})
export class VideoMatrixComponent implements OnInit {
  videos = [{},{},{},{},{},{},{},{},{}];

  constructor(
    public common: CommonService
  ) { }

  ngOnInit() {
    this.updateMatrixSet();

    this.common.matrixSetUpdated.subscribe(
      e => {
        this.updateMatrixSet();
      }
    )
  }

  updateMatrixSet() {
    this.videos = [];

    for (let i in this.common.cameras) {
      if (this.common.videoMatrixSet === 'all') {
        this.videos.push(this.common.cameras[i]);
      } else {
        console.log(this.common.cameras[i].room_id);

        if (this.common.cameras[i].room_id == this.common.videoMatrixSet) {
          this.videos.push(this.common.cameras[i]);
        }
      }
    }
  }

}
