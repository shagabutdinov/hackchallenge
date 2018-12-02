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

    console.log(this.common.videoMatrixSet);
    console.log(this.common.cameras);

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

    console.log(this.videos);
  }

  click(camera) {
    this.common.camera = camera;
    document.querySelector('video').load();
    this.common.selectWindow('video');
  }

}
