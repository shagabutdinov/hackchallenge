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
    // console.log(this.videos);
  }

}
