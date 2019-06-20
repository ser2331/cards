import React from "react";

import Actions from "../Actions";
import Cards from "../Cards";

const Deck = ({ cards }) => (
  <>
    <Actions />
    <Cards cards={cards} />
  </>
);

export default Deck;
