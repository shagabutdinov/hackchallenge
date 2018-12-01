import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {
  logs = [];

  constructor(
    public common: CommonService
  ) {
    for (let i = 0; i < 20; i++) {
      const log = {
        title: `Событие #${i + 1}`,
        status: 'ok'
      };

      if (i < 5) {
        log.status = 'warning';
      }

      if (i < 2) {
        log.status = 'danger';
      }

      this.logs.push(log);
    }
  }

  ngOnInit() {
  }

  updateEventStatus(i, status) {
    this.logs.splice(i, 1);
  }
}
