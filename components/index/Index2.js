import { Controller, Scene } from "react-scrollmagic";
const Index2 = props => {
  return (
    <div className="index-2">
      <div id="trigger"></div>
      <Controller>
        <h1>Who Am I?</h1>
        <Scene
          duration={500}
          classToggle="slide-left-opacity"
          triggerElement="#trigger"
          indicators={true}
        >
          {(progress, event) => (
            <div className="container">
              <div className="left">
                <p>
                  I'm a software developer based in portland, oregon with
                  experience in...
                </p>
                <ul>
                  <li>Javascript</li>
                  <li>Ruby</li>
                  <li>Python</li>
                </ul>
                <ul>
                  <li>React</li>
                  <li>Rails</li>
                  <li>Django</li>
                </ul>
              </div>
            </div>
          )}
        </Scene>
        <div id="trigger-2"></div>
        <Scene
          duration={500}
          classToggle="slide-right-opacity"
          triggerElement="#trigger-2"
          indicators={true}
        >
          {(progress, event) => (
            <div className="container">
              <div className="right">
                <p>I'm passionate about...</p>
                <ul>
                  <li>Javascript</li>
                  <li>Ruby</li>
                  <li>Python</li>
                </ul>
                <ul>
                  <li>React</li>
                  <li>Rails</li>
                  <li>Django</li>
                </ul>
              </div>
            </div>
          )}
        </Scene>
      </Controller>
      <style jsx>{`
        .index-2 {
          height: 50rem;
          margin-top: 3rem;
        }
        .container {
          transition: 0.7s all;
          opacity: 0;
        }
        ul {
          display: inline-block;
          text-align: left;
        }
        .right {
          text-align: right;
        }
        @keyframes slide-down-opacity {
          from {
            opacity: 0;
            transform: translateY(-3rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-up-opacity {
          from {
            opacity: 0;
            transform: translateY(3rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-left-opacity {
          from {
            opacity: 0;
            transform: translateX(-3rem);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slide-right-opacity {
          from {
            opacity: 0;
            transform: translateX(3rem);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .fadein {
          animation: opacity 0.7s ease-out;
        }
        .slide-down-opacity {
          animation: slide-down-opacity 0.7s ease-out;
          opacity: 1;
          transform: translateX(0);
        }
        .slide-up-opacity {
          animation: slide-up-opacity 0.7s ease-out;
          opacity: 1;
          transform: translateX(0);
        }
        .slide-right-opacity {
          animation: slide-right-opacity 0.7s ease-out;
          opacity: 1;
          transform: translateX(0);
        }
        .slide-left-opacity {
          animation: slide-left-opacity 0.7s ease-out;
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>
    </div>
  );
};

export default Index2;
