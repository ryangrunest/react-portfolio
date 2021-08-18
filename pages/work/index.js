import Layout from "../../components/DefaultLayout";

export default function Index() {
  return (
    <Layout page="Work" childClass="work">
      <div className="github-profile"></div>
      <div className="overlay">
        <h1>Software / Web Developer</h1>
        <p>Currently Based in Portland, OR.</p>
        <p>
          Don't be shy. Send me an{" "}
          <a href="mailto:ryangrunest45@gmail.com">email</a>.
        </p>
      </div>
    </Layout>
  );
}
