export default function Product(props) {
  return (
    <div id={props.id} className="product">
      <h4>{props.title}</h4>
      <img src={props.imgPath} />
      <p>{`Price: $${props.price}`}0</p>
      <button onClick={() => props.createCheckout(props.id)}></button>
    </div>
  );
}
