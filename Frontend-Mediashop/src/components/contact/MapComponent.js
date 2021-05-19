import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'

function Map() {

    return <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 36.85600146485218, lng: 10.156964970510979 }} />;
}
const MapWrapped = withScriptjs(withGoogleMap(Map));



export default function MapComponent() {
    return (
      <div style={{ width: "100vw", height: "100vh" }}>
        <MapWrapped
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDoDJsCwoUV6hiL5JSr2-ewl8VZfxwlgVQ`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }