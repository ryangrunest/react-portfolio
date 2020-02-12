import WordBreak from "./WordBreak";
export default function BlogPost(props) {
  let splitText = props.text.split("\n");
  console.log(splitText);
  console.log(props);
  return (
    <div className="BlogPost">
      <h2 className="title">{props.title}</h2>
      <h3 className="date">{props.date}</h3>
      <div className="image-container">
        <img src={props.imgPath}></img>
      </div>
      <div className="text">
        {splitText.map(line => (
          <p>{line}</p>
        ))}
      </div>
      <WordBreak />
      <style>{`
      .BlogPost {
        background: white;
        border-radius: 5px;
        box-shadow: 0px 0px 20px rgba(0,0,0,0.1);
        padding-bottom: 3rem;
      }
      .title {
        margin: 0;
        padding: 1.5rem;
        padding-bottom: 0;
        text-transform: uppercase;
      }
      .date {
        padding: 1.5rem;
        padding-top: 0.3rem;
        margin: 0;
        color: #687079;
        font-size: 1rem;
      }
      .image-container {
        width: 100%;
        text-align: center;
      }
      img {
        width: 100%;
      }
      
      .text {
        padding: 1rem 2rem;
        padding-bottom: 3rem;
      }
      .text p {
        text-indent: 2rem;
        font-size: 1.3rem;
        word-wrap: break-word;
        margin: 0;
      }
  `}</style>
    </div>
  );
}
