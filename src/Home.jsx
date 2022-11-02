import axios from "axios";
import { useState, useEffect } from "react";
import { ShoesIndex } from "./ShoesIndex";

export function Home() {
  const [shoes, setShoes] = useState([]);

  const handleIndexShoes = () => {
    axios.get("http://localhost:3000/shoes.json").then((response) => {
      setShoes(response.data);
    });
  };

  useEffect(handleIndexShoes, []);

  return (
    <div>
      <ShoesIndex shoes={shoes} />
    </div>
  );
}
