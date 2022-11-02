import axios from "axios";
import { useState, useEffect } from "react";

export function ShoesIndex() {
  const [shoes, setShoes] = useState([]);

  const handleIndexShoes = () => {
    axios.get("http://localhost:3000/shoes.json").then((response) => {
      setShoes(response.data);
    });
  };

  useEffect(handleIndexShoes, []);

  return (
    <div>
      {shoes.map((shoe) => (
        <div key={shoe.id}>
          <h2>{shoe.name}</h2>
        </div>
      ))}
    </div>
  );
}
