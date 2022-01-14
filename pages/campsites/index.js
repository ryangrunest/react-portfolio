import Head from "next/head";
import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(() => import("./components/Map"), {
  ssr: false,
});

export default function CampSites() {
  return (
    <div>
      <Head>
        <title>Campsites</title>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>

      <h1>hello campsites</h1>
      <DynamicComponentWithNoSSR />
    </div>
  );
}
