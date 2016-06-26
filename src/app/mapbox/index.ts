// TODO: fix once mapbox-gl supports SystemJS
// import mapboxgl = require('mapbox-gl');
declare const mapboxgl: any;

export function setAccessToken(token: string) {
  mapboxgl.accessToken = token;
}

export * from './map.component';
