import Layout from "../components/DefaultLayout";
import Who from "../components/index/Who";
import Art from "../components/index/Art";

export default function Index() {
  return (
    <Layout page="Home">
      <div className="index">
        <div className="github-profile"></div>
        <div className="overlay">
          <h1>Software / Web Developer</h1>
          <p>Currently Based in Portland, OR.</p>
          <p>
            Don't be shy. Send me an{" "}
            <a href="mailto:ryangrunest45@gmail.com">email</a>.
          </p>
        </div>
      </div>
      <Who />
      <Art />
    </Layout>
  );
}
