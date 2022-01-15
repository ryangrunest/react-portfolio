import dynamic from "next/dynamic";

import MapHeader from "./components/MapHeader";
import MapHead from "./components/MapHead";
import MapSubHeader from "./components/MapSubHeader";

const MapWithNoSSR = dynamic(() => import("./components/Map"), {
  ssr: false,
});

export default function CampSites() {
  return (
    <>
      <MapHead page="CampSites" />
      <MapHeader title="CampSites" />
      <MapSubHeader />
      <MapWithNoSSR />
    </>
  );
}
