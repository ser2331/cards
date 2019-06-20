import React from "react";

export default ({ cards }) => (
  <ul className="cards mw8-ns">
    {cards.map(card => (
      <li>
        <img src={card.image} alt={`${card.value} of ${card.suit}`} />
      </li>
    ))}
  </ul>
);
