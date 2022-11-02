export function ShoesIndex(props) {
  return (
    <div>
      {props.shoes.map((shoe) => (
        <div key={shoe.id}>
          <h2>{shoe.name}</h2>
        </div>
      ))}
    </div>
  );
}
