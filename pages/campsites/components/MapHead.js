import Head from "next/head";

const MapHead = (props) => {
  console.log(props);
  return (
    <Head>
      <title>Ryan Grunest // {props.page}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://fonts.googleapis.com/css?family=Dosis&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css?family=Muli:700&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,600,700&display=swap"
        rel="stylesheet"
      ></link>
      <link href="/index.css" rel="stylesheet"></link>
      <link
        rel="icon"
        href="https://rg-portfolio-bucket.s3.us-west-2.amazonaws.com/blog-images/favicon.ico"
        type="image/x-icon"
      ></link>
      <link
        href="https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css"
        rel="stylesheet"
      />
    </Head>
  );
};

export default MapHead;
