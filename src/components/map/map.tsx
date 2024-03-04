import React, { useRef } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';
import { OfferLocation } from '../../types/offers';
import { useLocation } from 'react-router-dom';
import { AppRoute } from '../../consts';

type MapProps = {
  cityLocation: OfferLocation;
}

function Map({cityLocation}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, cityLocation);
  const {pathname} = useLocation();
  const mapHeight = (pathname as AppRoute === AppRoute.Main) ? '550px' : '579px';

  return (
    <div className="map" ref={mapRef} style={{height: mapHeight, width: '100%'}}>

    </div>
  );
}

export default Map;
