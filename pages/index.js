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
            transition: 0.3s all;
            transform: rotate(-5deg);
            text-transform: uppercase;
            color: #f0f0f0;
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
            animation: opacity 2s ease-out;
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
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }
          a {
            color: #f0f0f0;
          }
          a:hover {
            color: #ccbba2;
          }
          @keyframes slidein {
            from {
              opacity: 0;
              transform: translateX(100%) rotate(-5deg);
            }
            to {
              opacity: 1;
              transform: translateX(0) rotate(-5deg);
            }
          }
          @keyframes opacity {
            from {
              opacity: 0;
              transform: translateX(-100%);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}</style>
      </div>
    </Layout>
  );
}
