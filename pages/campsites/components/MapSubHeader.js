import Pin from "./Pin";

const MapSubHeader = (props) => {
  return (
    <div className="subheader">
      <div className="subheader-title">add new pin</div>
      <Pin pin="tent" />
      <Pin pin="camper" />
      <Pin pin="sneaky" />
    </div>
  );
};

export default MapSubHeader;
