import Layout from "../components/MyLayout";
import Index2 from "../components//index/Index2";
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
      <Index2 />

      <style jsx>{`
        h1 {
          text-align: center;
          transition: 0.3s all;
          transform: rotate(-5deg);
          text-transform: uppercase;
          padding: 0 0.5rem;
          color: #f3f5f6;
          animation-name: slidein;
          animation-duration: 2s;
        }
        h1:hover {
          transform: rotate(5deg);
        }
        p:first-of-type {
          margin-top: 4rem;
        }
        .overlay p {
          text-align: center;
          color: #f3f5f6;
          font-size: 15px;
          font-weight: 700;
          animation: opacity 2s ease-in;
        }
        .index {
          position: relative;
          background: url("/splash.jpg") no-repeat center center fixed;
          height: 48rem;
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
          color: #f3f5f6;
          transition: 0.3s all;
        }
        a:hover {
          color: rgb(120, 169, 152);
        }
        .padding-top {
          padding-top: 10rem;
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
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </Layout>
  );
}
