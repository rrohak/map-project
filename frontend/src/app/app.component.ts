import { AfterViewInit, Component } from '@angular/core';
import { CRS, imageOverlay, latLng, Map, tileLayer } from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  private map: Map;
  private zoom: number;
  private imageOverlay = imageOverlay('assets/rongguangtang%20map.jpg', [[0, 0], [9840, 14518]]);
  modernMapOptions = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 18, attribution: '...'})
    ],
    zoom: 14,
    center: latLng(30.2329305206, 120.1386630487)
  };
  OldMapOptions = {
    layers: [
      this.imageOverlay
    ],
    overlays: [],
    zoom: 2,
    center: latLng(0, 0),
    crs: CRS.Simple,
    minZoom: -5
  };

  public context: CanvasRenderingContext2D;


  receiveMap(map: Map): void {
    this.map = map;
  }

  receiveZoom(zoom: number): void {
    this.zoom = zoom;
  }

  ngAfterViewInit(): void {
  }
}
