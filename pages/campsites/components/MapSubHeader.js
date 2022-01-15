import Pin from "./Pin";

const MapSubHeader = (props) => {
  return (
    <div className="subheader">
      <div className="subheader-title">
        add a new site to the map by dragging and dropping one of the pins.{" "}
        <span className="highlighted">
          Hover over a pin for a brief description.
        </span>
      </div>
      <Pin pin="tent" />
      <Pin pin="camper" />
      <Pin pin="sneaky" />
    </div>
  );
};

export default MapSubHeader;
