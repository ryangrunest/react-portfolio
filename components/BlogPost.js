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
    </div>
  );
}
