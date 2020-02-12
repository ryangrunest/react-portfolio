export default function BlogPost(props) {
  let splitText = props.text.split("\n");
  console.log(splitText);
  console.log(props);
  return (
    <div className="BlogPost">
      <h1 className="title">{props.title}</h1>
      <div className="image-container">
        <img src={props.imgPath}></img>
      </div>
      <h3 className="date">{props.date}</h3>
      <div className="text">
        {splitText.map(line => (
          <p>{line}</p>
        ))}
      </div>
      <style>{`
      .BlogPost {
        background: white;
        border-radius: 5px;
        box-shadow: 0px 0px 20px rgba(0,0,0,0.1);
      }
      .title {
        text-align: center;
        padding-top: 1rem;
      }
      .image-container {
        width: 100%;
        text-align: center;
      }
      img {
        width: 100%;
      }
      .date {
        padding: 0 2rem;
      }
      .text {
        padding: 1rem 2rem;
      }
      .text p {
        text-indent: 2rem;
        font-size: 1.5rem;
      }
  `}</style>
    </div>
  );
}
