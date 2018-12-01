import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  features = [];
  renderedMarkdown = '';

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.getFeatures();
    this.getTestMarkdownPage();
  }

  getFeatures() {
    this.http.get("assets/data/features.json").subscribe(
      features => this.features = features
    );
  }

  getTestMarkdownPage() {
    this.http.getMarkdown("https://raw.githubusercontent.com/polyakovin/template_angular/master/README.md").subscribe(
      renderedMarkdown => this.renderedMarkdown = renderedMarkdown
    );
  }
}
