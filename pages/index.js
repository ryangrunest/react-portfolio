import Layout from "../components/MyLayout";
import { useRouter } from "next/router";

export default function Index() {
  return (
    <Layout page="Home">
      <div className="index">
        <h1>Software / Web Developer</h1>
        <p>Currently Based in San Diego, CA.</p>
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
          p {
            text-align: center;
            margin-top: 4rem;
          }
        `}</style>
      </div>
    </Layout>
  );
}
