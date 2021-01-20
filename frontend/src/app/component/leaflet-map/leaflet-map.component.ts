import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CRS, icon, imageOverlay, latLng, Map, marker, Point } from 'leaflet';

@Component({
  selector: 'app-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.scss']
})
export class LeafletMapComponent implements OnInit, OnDestroy, AfterViewInit {

  private markerIcon = icon({
    iconSize: [22, 22],
    iconAnchor: [6, 21],
    iconUrl: 'assets/icons/iconfinder_map-marker_299087.svg',
    shadowSize: [12, 21],
    shadowAnchor: [6, 21],
    shadowUrl: 'https://unpkg.com/leaflet@1.6.0/dist/images/marker-shadow.png'
  });
  @Input('mapOptions') options;

  markerLayer = [];

  public map: Map;

  constructor() {
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.map.clearAllEventListeners();
    this.map.remove();
  }

  ngAfterViewInit(): void {
  }

  onMapReady(map: Map): void {
    if (this.options.layers[0]._url !== 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png') {
      map.fitBounds(this.options.layers[0].getBounds());
      map.setZoom(-4);
      const point = new Point(500, 5000, false);
      this.markerLayer.push(marker([9840 - 6599.4891304337, 5015.9239130433], {icon: this.markerIcon}));
    } else {
      this.markerLayer.push(marker([30.2329305206, 120.1386630487], {icon:
      this.markerIcon}));
    }
  }
}
