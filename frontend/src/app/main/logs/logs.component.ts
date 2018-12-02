import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {
  logs = [];

  constructor(
    public common: CommonService,
    private http: HttpService
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
    this.http.get(`assets/test_data/events.json`).subscribe(
      events => {
        console.log(events);
        this.logs = events;
        this.prioritizeLogs();
      }
    )
  }

  updateEventStatus(i, status) {
    // this.logs.splice(i, 1);
    this.logs[i].status = status;
    this.prioritizeLogs();
  }

  prioritizeLogs() {
    const newLogs = [];

    for (const log of this.logs) {
      if (log.status === 'new' && log.priority === 'high') {
        newLogs.push(log);
      }
    }

    for (const log of this.logs) {
      if (log.status === 'new' && log.priority === 'low') {
        newLogs.push(log);
      }
    }

    for (const log of this.logs) {
      if (log.status !== 'new') {
        newLogs.push(log);
      }
    }

    this.logs = newLogs;
  }
}
