import React from "react";





const { compose, withStateHandlers } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} = require("react-google-maps");

const MapWithAMakredInfoWindow = compose(
  withStateHandlers(() => ({
    isOpen: false,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    })
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{ lat: 41.4703573, lng: -82.8234369 }}
  >
    <Marker
      position={{ lat: 41.4703573, lng: -82.8234369 }}
      onClick={props.onToggleOpen}
    >
      {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
      <div>
          <h3>The Cedar Motel</h3>
        <p>
            In the area?<br/>
            <a target="_blank" rel="noreferrer" href="https://www.google.com/maps/place/The+Cedar+Motel/@41.470308,-82.8256687,17z/data=!3m1!4b1!4m8!3m7!1s0x883a4c1dad835375:0xc8228cc61ed37a10!5m2!4m1!1i2!8m2!3d41.4703573!4d-82.8234369">Get Directions</a>
        </p>
      </div>
      </InfoWindow>}
    </Marker>
  </GoogleMap>
);

export default MapWithAMakredInfoWindow;























