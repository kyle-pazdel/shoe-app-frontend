export function ShoesShow(props) {
  return (
    <div>
      <img src={props.shoe.image} alt={props.shoe.description} />
      <h2>{props.shoe.name}</h2>
      <p>{props.shoe.color}</p>
      <p>{props.shoe.description}</p>
      <p>{props.shoe.style}</p>
    </div>
  );
}
