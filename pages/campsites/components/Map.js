import { Component } from "react";
import ReactMapGL from "react-map-gl";

class Map extends Component {
  state = {
    viewport: {
      width: "100vw",
      height: "100vh",
      latitude: 41.5868,
      longitude: -93.625,
      zoom: 13,
    },
  };

  render() {
    return (
      <ReactMapGL
        mapStyle="mapbox://styles/ryangrunest/ckyenw50t1d7h14p6a5rn2s7a"
        mapboxApiAccessToken="pk.eyJ1IjoicnlhbmdydW5lc3QiLCJhIjoiY2t5ZW51MDM1MWI0bzMwcWs5bjVyNnh3byJ9.NHl_ZdVXxZNPOmIM9B5z0w"
        onViewportChange={(viewport) => this.setState({ viewport })}
        {...this.state.viewport}
      />
    );
  }
}

export default Map;
