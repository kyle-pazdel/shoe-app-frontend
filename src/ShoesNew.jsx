import axios from "axios";

export function ShoesNew() {
  const handleCreateShoe = (params) => {
    console.log(params);
    axios.post("http://localhost:3000/shoes.json", params).then((response) => {
      const newShoe = response.data;
      console.log(newShoe);
      window.location.href = "/";
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    handleCreateShoe(params);
    event.target.reset();
  };

  return (
    <form id="shoes-new" onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input type="text" name="name"></input>
      </div>
      <div>
        <label>Color</label>
        <input type="text" name="color"></input>
      </div>
      <div>
        <label>Description</label>
        <input type="text" name="description"></input>
      </div>
      <div>
        <label>Style</label>
        <input type="text" name="style"></input>
      </div>
      <div>
        <label>Image</label>
        <input type="text" name="image"></input>
      </div>
      <div>
        <input type="submit"></input>
      </div>
    </form>
  );
}
