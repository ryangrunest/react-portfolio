import { Controllor, Scene } from "react-scrollmagic";
export default function Art() {
  return (
    <div className="Art">
      <h1>
        <i>
          “Don’t be in a hurry to condemn because he doesn’t do what you do or
          think as you think or as fast. There was a time when you didn’t know
          what you know today.”
        </i>
        <span>- Malcolm X</span>
      </h1>
      <h4>
        <p>Currently Vibing To...</p>
      </h4>
      <div className="container">
        <div className="nested">
          <img
            loading="lazy"
            src="https://rg-portfolio-bucket.s3.us-west-2.amazonaws.com/blog-images/slow-rush.jpeg"
          ></img>
          <div className="text-container">
            <h3>The Slow Rush</h3>
            <p>Tame Impala</p>
          </div>
          <i className="fas fa-headphones"></i>
        </div>
        <div className="nested small-no-top-border">
          <img
            loading="lazy"
            className="capitol"
            src="https://rg-portfolio-bucket.s3.us-west-2.amazonaws.com/blog-images/capitol.jpg"
          ></img>
          <div className="text-container">
            <h3>Capitol</h3>
            <p>Orson Scott Card</p>
          </div>

          <i className="fas fa-book-open"></i>
        </div>
      </div>
    </div>
  );
}
