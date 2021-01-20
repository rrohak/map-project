import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjectCardComponent } from './component/project-card/project-card.component';
import { HeaderComponent } from './component/header/header.component';
import { NgxMasonryModule } from 'ngx-masonry';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LeafletMapComponent } from './component/leaflet-map/leaflet-map.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProjectCardComponent,
    HeaderComponent,
    LeafletMapComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxMasonryModule,
    LeafletModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule {
}
