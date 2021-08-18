import Head from "next/head";

const MyHead = (props) => {
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
    </Head>
  );
};

export default MyHead;
