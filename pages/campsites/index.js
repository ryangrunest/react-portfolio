import dynamic from "next/dynamic";

import MapHeader from "./components/MapHeader";
import MapHead from "./components/MapHead";

const DynamicComponentWithNoSSR = dynamic(() => import("./components/Map"), {
  ssr: false,
});

export default function CampSites() {
  return (
    <>
      <MapHead page="CampSites" />
      <MapHeader />
      <DynamicComponentWithNoSSR />
    </>
  );
}
