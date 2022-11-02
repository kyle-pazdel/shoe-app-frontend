export function ShoesShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateShoe(params);
    event.target.reset();
  };

  return (
    <div>
      <div>
        <img src={props.shoe.image} alt={props.shoe.description} />
        <h2>{props.shoe.name}</h2>
        <p>{props.shoe.color}</p>
        <p>{props.shoe.description}</p>
        <p>{props.shoe.style}</p>
      </div>

      <form id="shoes-new" onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" name="name" defaultValue={props.shoe.name}></input>
        </div>
        <div>
          <label>Color</label>
          <input type="text" name="color" defaultValue={props.shoe.color}></input>
        </div>
        <div>
          <label>Description</label>
          <input type="text" name="description" defaultValue={props.shoe.description}></input>
        </div>
        <div>
          <label>Style</label>
          <input type="text" name="style" defaultValue={props.shoe.style}></input>
        </div>
        <div>
          <label>Image</label>
          <input type="text" name="image" defaultValue={props.shoe.image}></input>
        </div>
        <div>
          <input type="submit"></input>
        </div>
      </form>
    </div>
  );
}
