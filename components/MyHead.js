import Head from "next/head";

const MyHead = props => {
  return (
    <Head>
      <title>{props.page} // Ryan Grunest</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://fonts.googleapis.com/css?family=Dosis&display=swap"
        rel="stylesheet"
      ></link>
      <link href="/index.css" rel="stylesheet"></link>
    </Head>
  );
};

export default MyHead;
