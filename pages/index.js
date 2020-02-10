import Layout from "../components/MyLayout";
import { useRouter } from "next/router";

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

        <style jsx>{`
          h1 {
            text-align: center;
            padding-top: 40vh;
            transition: 0.3s all;
            transform: rotate(-5deg);
            text-transform: uppercase;
            color: white;
            width: 94%;
            animation-name: slidein;
            animation-duration: 2s;
          }
          h1:hover {
            transform: rotate(5deg);
          }
          p:first-of-type {
            margin-top: 4rem;
          }
          p {
            text-align: center;
            color: white;
            font-size: 15px;
            font-weight: 700;
            animation-name: opacity;
            animation-duration: 4s;
          }
          .index {
            position: relative;
            background: url("/splash.jpg") no-repeat center center fixed;
            height: 90vh;
            z-index: 0;
          }
          .overlay {
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.3);
            position: absolute;
          }
          a {
            color: white;
          }
          a:hover {
            color: #a5faf3;
          }
          @keyframes slidein {
            from {
              opacity: 0;
              padding-top: 60vh;
            }
            to {
              opacity: 1;
              padding-top: 40vh;
            }
          }
          @keyframes opacity {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}</style>
      </div>
    </Layout>
  );
}
