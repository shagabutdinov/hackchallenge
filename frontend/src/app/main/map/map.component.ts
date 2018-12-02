import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  cameras: any[] = [
    {
      x: 260,
      y: 270,
      angle: 240,
      status: 'warning'
    },
    {
      x: 30,
      y: 50,
      angle: 40,
      status: 'danger'
    },
    {
      x: 430,
      y: 50,
      angle: 140
    }
  ];

  constructor(
    public common: CommonService
  ) { }

  ngOnInit() {
    console.log(this.common.roomSelected);
  }

  click(camera) {
    this.common.camera = camera;
    document.querySelector('video').load();
    this.common.selectWindow('video');
  }

}
