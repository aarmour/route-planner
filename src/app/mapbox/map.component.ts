import {
  Component,
  ElementRef,
  Input,
  Type
} from '@angular/core';
declare const mapboxgl: any;

const MbMap = mapboxgl.Map;

@Component({
  moduleId: module.id,
  selector: 'mb-map',
  templateUrl: 'map.component.html'
})
export class MapComponent {

  private static id: number = 1;

  private containerId: string;
  private element: any;
  private map: Object;

  @Input('mbStyle') style: string;
  @Input() width: number = 300;
  @Input() height: number = 300;
  @Input() latitude: number = 0;
  @Input() longitude: number = 0;
  @Input() zoom: number = 12;

  constructor(private elementRef: ElementRef) {
    this.element = elementRef.nativeElement;
    this.containerId = `mb-map-${MapComponent.id++}`;
  }

  ngOnChange() {

  }

  ngAfterViewInit() {
    this.map = this.createMap();
  }

  private createMap() {
    return new MbMap({
      container: this.containerId,
      style: this.style,
      center: [this.longitude, this.latitude],
      zoom: this.zoom
    });
  }

  private getStyles() {
    return {
      width: `${this.width}px`,
      height: `${this.height}px`
    };
  }
}

export const MB_MAP_DIRECTIVES: Type[] = [MapComponent];
