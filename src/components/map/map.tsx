import React, { useEffect, useRef } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';
import { OfferLocation } from '../../types/offers';
import { useLocation } from 'react-router-dom';
import { AppRoute } from '../../consts';

type MapProps = {
  cityLocation: OfferLocation;
  points: OfferLocation[];
  selectedPoint: OfferLocation | null | undefined;
}

const defaultCustomIcon = new Icon({
  iconUrl: 'img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

const currentCustomIcon = new Icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});


function Map({cityLocation, points, selectedPoint}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, cityLocation);
  const {pathname} = useLocation();
  const mapHeight = (pathname as AppRoute === AppRoute.Main) ? '550px' : '579px';
  const mapWidth = (pathname as AppRoute === AppRoute.Main) ? '100%' : '1144px';

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        const marker = new Marker({lat: point.latitude, lng: point.longitude});

        marker.setIcon((point !== selectedPoint) ? defaultCustomIcon : currentCustomIcon).addTo(markerLayer);
      });
      return () => {
        map.removeLayer(markerLayer);
      };
    }

  }, [map, points, selectedPoint]);

  return (
    <div className="map" ref={mapRef} style={{height: mapHeight, width: mapWidth, margin: '0 auto'}}>

    </div>
  );
}

export default Map;
