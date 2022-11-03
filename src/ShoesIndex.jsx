export function ShoesIndex(props) {
  const shoesAscending = [...props.shoes].sort((a, b) => a.id - b.id);

  return (
    <div>
      {shoesAscending.map((shoe) => (
        <div key={shoe.id}>
          <img src={shoe.image} alt={shoe.description} />
          <h2>{shoe.name}</h2>
          <p>{shoe.color}</p>
          <p>{shoe.description}</p>
          <p>{shoe.style}</p>
          <button onClick={() => props.onSelectShoe(shoe)}>More Info</button>
        </div>
      ))}
    </div>
  );
}
