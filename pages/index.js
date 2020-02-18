import Layout from "../components/MyLayout";
import Who from "../components/index/Who";
import Art from "../components/index/Art";
import { Controller, Scene } from "react-scrollmagic";

export default function Index() {
  return (
    <Layout page="Home">
      <div className="index">
        <div className="overlay">
          <h1>Software / Web Developer</h1>
          <p>Currently Based in San Diego, CA.</p>
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
