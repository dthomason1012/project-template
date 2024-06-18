import mapboxgl, { GeoJSONSourceRaw } from 'mapbox-gl';
import React, { useEffect, useRef } from 'react';

interface MovingObject {
  id: number;
  name: string;
  coordinates: number[];
}

export const MapComponent: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);

  const movingObjects: MovingObject[] = [
    // Define your moving objects here
  ];

  useEffect(() => {
    mapboxgl.accessToken =
      'pk.eyJ1IjoiZHRob21hc29uMTAxMiIsImEiOiJjbHhraXd5MmMwMjFzMmpwd3F5MTI3djE5In0.x-8v4raA8Hr5LT0pdy9Nuw';
    if (mapContainer.current) {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/dark-v11',
        center: [-74.0060152, 40.7127281],
        zoom: 5,
        maxZoom: 15,
      });

      // Add zoom controls
      map.addControl(new mapboxgl.NavigationControl(), 'top-left');

      // Add your custom markers and lines here

      // Clean up on unmount
      return () => map.remove();
    }
  }, []);

  return (
    <div
      ref={mapContainer}
      style={{ position: 'absolute', top: 0, bottom: 0, width: '100%' }}
    />
  );
};
