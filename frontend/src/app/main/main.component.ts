import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  isMenuShown = false;

  constructor(
    private http: HttpService,
    public common: CommonService
  ) { }

  ngOnInit() {
    this.common.onWindowSelected.subscribe(
      e => this.isMenuShown = false
    );
  }
}
