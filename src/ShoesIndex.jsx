export function ShoesIndex(props) {
  return (
    <div>
      {props.shoes.map((shoe) => (
        <div key={shoe.id}>
          <img src={shoe.image} alt={shoe.description} />
          <h2>{shoe.name}</h2>
          <p>{shoe.color}</p>
          <p>{shoe.description}</p>
          <p>{shoe.style}</p>
        </div>
      ))}
    </div>
  );
}
