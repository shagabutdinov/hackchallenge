import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from '../../common.service';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  @Input() camera;
  isInDanger = true;

  constructor(public common: CommonService) { }

  ngOnInit() {
  }

}

