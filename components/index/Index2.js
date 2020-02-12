import { Controller, Scene } from "react-scrollmagic";
const Index2 = props => {
  return (
    <div className="index-2">
      <div id="trigger"></div>
      <Controller>
        <h1>Who Am I?</h1>
        <Scene
          duration={700}
          classToggle="slide-left-opacity"
          triggerElement="#trigger"
          indicators={false}
        >
          {(progress, event) => (
            <div className="container">
              <div className="left">
                <h2>
                  I'm a software developer from Portland, currently residing in
                  San Diego with experience in...
                </h2>
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
                <p>
                  ... and more. I think{" "}
                  <strong>javascript is a great language</strong>, and I'm
                  constantly wow'd by the amount of technology people have
                  created and built using it. That being said, I don't believe
                  that everything needs / should be created using javascript.
                  Always pick the right tool for the job!
                </p>
              </div>
            </div>
          )}
        </Scene>
        <div id="trigger-2"></div>
        <Scene
          duration={500}
          classToggle="slide-right-opacity"
          triggerElement="#trigger-2"
          indicators={false}
        >
          {(progress, event) => (
            <div className="container">
              <div className="right">
                <h2>I'm passionate about...</h2>
                <ul>
                  <li>Coding</li>
                  <li>eCommerce</li>
                  <li>Entrepeneurship</li>
                </ul>
                <ul>
                  <li>Music</li>
                  <li>Art</li>
                  <li>Learning</li>
                </ul>
                <p>
                  I believe that it's important to have a{" "}
                  <strong>well balanced lifestyle</strong>. Working as a
                  software developer means that I spend a lot of time staring at
                  a computer, thinking quietly to myself.
                </p>
                <p>
                  Because of this, I actively try to seek out opportunity to
                  connect with other people. Music, Art, and continual learning
                  are some of the outlets I've found to help with that.
                </p>
              </div>
            </div>
          )}
        </Scene>
      </Controller>
      <style jsx>{`
        h1 {
          margin: 0;
          padding-left: 20px;
        }
        .index-2 {
          min-height: 70rem;
          margin-top: 2rem;
          background: #f3f5f6;
        }
        .container {
          color: #252b33;
          margin-top: 2rem;
          transition: 0.7s all;
          opacity: 0;
          border-radius: 5px;
          background: #f3f5f6;
          padding: 1rem;
          box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
        }
        @media only screen and (max-width: 600px) {
          .container {
            margin-top: 0;
            box-shadow: none;
            background: #f5f5f5;
          }
        }
        .container.dark {
          color: #f3f5f6;
          background-color: #252b33;
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
