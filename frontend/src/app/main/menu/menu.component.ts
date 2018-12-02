import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    public common: CommonService
  ) { }

  ngOnInit() {
  }

  selectWindow(window) {
    console.log(window);
    this.common.selectWindow('video-matrix');
    this.common.updateMatrixSet(window);
  }
}
