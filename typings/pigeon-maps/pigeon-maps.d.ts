// Definitions written for pigeon-maps 0.8.2 by Sébastien Fragnaud (ImplyData)

import * as React from 'react';

export interface LatLng {
  lat: number;
  lng: number;
}

export interface GeoBounds {
  ne: number[];
  sw: number[];
}

export interface MapProps extends React.Props<any> {
  center: number[];
  zoom: number;
  width: number;
  animate?: boolean;
  attribution?: (() => string) | boolean;
  height: number;
  onClick: (event: React.MouseEvent<any>) => void;
  provider: (x: number, y: number, z: number) => string;
  onBoundsChanged: (stuff: {center: number[], zoom: number, bounds: GeoBounds, initial: boolean}) => void;
}

export interface MapState {
}

export default class Map extends React.Component<MapProps, MapState> {
  _lastZoom: number;
  _lastCenter: number[];
  constructor();
  latLngToPixel(latLng: number[]): number[];
  coordsInside(coordinates: number[]): boolean;
  getBounds(): GeoBounds;
  render(): JSX.Element;
  setCenterZoomTarget(center: number[], zoom: number): void;
}
