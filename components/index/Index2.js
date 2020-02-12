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
      <style jsx>{``}</style>
    </div>
  );
};

export default Index2;
