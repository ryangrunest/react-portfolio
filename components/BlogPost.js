export default function BlogPost(props) {
  return (
    <div className="BlogPost">
      <div className="title">{props.title}</div>
      <img src={props.imgPath}></img>
      <div className="text">
        {props.text.map(line => (
          <p>{line}</p>
        ))}
      </div>
      <style>{`
      .BlogPost {
      }
  img {
    width: calc(100% + 40px);
    transform: translateX(-20px);
  }
  `}</style>
    </div>
  );
}
