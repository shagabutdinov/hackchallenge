import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {
  socket = null;
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
    this.loadEvents();

    this.socket = new WebSocket('ws://localhost/websocket');

    console.log('ASDASD');
    this.socket.addEventListener('open', (event) => {
      console.log('open');
      this.socket.send(JSON.stringify({
        command: 'subscribe',
        identifier: JSON.stringify({
          channel: 'EventsChannel',
        }),
      }));
    });

    this.socket.addEventListener('message', (event) => {
      let data = JSON.parse(event.data);
      if(!data.identifier) {
        return ;
      }

      console.log(event);
      this.loadEvents()
      console.log('Message from server ', data);
    });
  }

  loadEvents() {
    this.http.get('/events').subscribe(
      events => {
        // console.log(events);
        this.logs = events;
        this.prioritizeLogs();
      }
    )
  }

  updateEventStatus(i, status) {
    console.log(status);
    console.log(`/events/${this.logs[i].id}`);
    this.http.post(
      `/events/${this.logs[i].id}`,
      {status: status}

    ).subscribe(
      events => {
        console.log('ok');
      }
    )

    // this.logs.splice(i, 1);
    // this.logs[i].status = status;
    // this.prioritizeLogs();
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

  click(log) {
    this.common.windowSelected = 'video';
    // this.common.logSelected = log;
    this.common.camera = log.camera;
    document.querySelector('video').load()
  }
}
