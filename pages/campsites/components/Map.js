import { Component } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

import Pin from "./Pin";

class Map extends Component {
  state = {
    viewport: {
      width: "100%",
      height: "90vh",
      latitude: 32.71,
      longitude: -117.16,
      zoom: 9,
    },
    pins: [],
  };

  clickHandler = (e) => {
    const latitude = e.lngLat[1];
    const longitude = e.lngLat[0];

    const { pins } = this.state;

    pins.push({ type: "tent", latitude, longitude });
    this.setState({ pins: pins });

    console.log(e);
    // console.log(lat, long);
  };

  render() {
    return (
      <ReactMapGL
        onClick={this.clickHandler}
        mapStyle="mapbox://styles/ryangrunest/ckyenw50t1d7h14p6a5rn2s7a"
        mapboxApiAccessToken="pk.eyJ1IjoicnlhbmdydW5lc3QiLCJhIjoiY2t5ZW51MDM1MWI0bzMwcWs5bjVyNnh3byJ9.NHl_ZdVXxZNPOmIM9B5z0w"
        onViewportChange={(viewport) => this.setState({ viewport })}
        {...this.state.viewport}
      >
        {/* <Marker
          latitude={32.71}
          longitude={-117.16}
          offsetLeft={0}
          offsetTop={0}
        >
          <div>hello map</div>
        </Marker> */}

        {this.state.pins.map((pin, index) => {
          return (
            <Marker
              latitude={pin.latitude}
              longitude={pin.longitude}
              offsetLeft={-10}
              offsetTop={-15}
              key={index}
            >
              <Pin pin={pin.type} />
            </Marker>
          );
        })}
      </ReactMapGL>
    );
  }
}

export default Map;
