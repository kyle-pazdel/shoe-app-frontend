import axios from "axios";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";
import { ShoesIndex } from "./ShoesIndex";
import { ShoesShow } from "./ShoesShow";

export function Home() {
  const [shoes, setShoes] = useState([]);
  const [isShoeVisible, setIsShoeVisible] = useState(false);
  const [currentShoe, setCurrentShoe] = useState({});

  const handleIndexShoes = () => {
    axios.get("http://localhost:3000/shoes.json").then((response) => {
      console.log(response.data);
      setShoes(response.data);
    });
  };

  const handleShowShoe = (shoe) => {
    console.log(shoe);
    setIsShoeVisible(true);
    setCurrentShoe(shoe);
  };

  const handleHideShoe = () => {
    setIsShoeVisible(false);
  };

  const handleUpdateShoe = (params) => {
    axios.patch("http://localhost:3000/shoes/" + currentShoe.id + ".json", params).then((response) => {
      console.log(response.data);
      const updatedShoe = response.data;
      setCurrentShoe(updatedShoe);
      setShoes(
        shoes.map((shoe) => {
          if (shoe.id === updatedShoe.id) {
            return updatedShoe;
          } else {
            return shoe;
          }
        })
      );
    });
  };

  useEffect(handleIndexShoes, []);

  return (
    <div>
      <ShoesIndex shoes={shoes} onSelectShoe={handleShowShoe} />
      <Modal show={isShoeVisible} onClose={handleHideShoe}>
        <ShoesShow shoe={currentShoe} onUpdateShoe={handleUpdateShoe} />
      </Modal>
    </div>
  );
}
