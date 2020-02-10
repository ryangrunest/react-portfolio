import Layout from "../components/MyLayout";
import { useRouter } from "next/router";

export default function Index() {
  return (
    <Layout page="Home">
      <div className="index">
        <h1>Software / Web Developer</h1>
        <p>Currently Based in San Diego, CA.</p>
        <p>
          Don't be shy. Send me an{" "}
          <a href="mailto:ryangrunest45@gmail.com">email</a>.
        </p>
        <style jsx>{`
          h1 {
            text-align: center;
            margin-top: 40vh;
            transition: 0.3s all;
            transform: rotate(-5deg);
            text-transform: uppercase;
          }
          h1:hover {
            transform: rotate(5deg);
          }
          p:first-of-type {
            margin-top: 4rem;
          }
          p {
            text-align: center;
          }
        `}</style>
      </div>
    </Layout>
  );
}
