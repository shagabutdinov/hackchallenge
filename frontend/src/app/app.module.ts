import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRouterModule } from "./app.routing";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { MainComponent } from './main/main.component';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { VideoComponent } from './main/video/video.component';
import { LogsComponent } from './main/logs/logs.component';
import { MapComponent } from './main/map/map.component';
import { MenuComponent } from './main/menu/menu.component';
import { VideoMatrixComponent } from './main/video-matrix/video-matrix.component';
import { ConstructorComponent } from './constructor/constructor.component';

mergeAllIconsToOneObject();

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    VideoComponent,
    LogsComponent,
    MapComponent,
    MenuComponent,
    VideoMatrixComponent,
    ConstructorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterModule,
    FontAwesomeModule
  ],
  providers: [ HttpService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

function mergeAllIconsToOneObject() {
  let fa = {...fas, ...fab};
  for (const icon in fa) {
    fa[icon].prefix = 'fas';
  }
  library.add(fa);
}