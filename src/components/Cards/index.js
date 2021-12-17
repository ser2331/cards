import React from "react";

const getLabel = card => {
  var suite = "";

  if (card.suit === "HEARTS") {
    suite = "\u2665";
  } else if (card.suit === "SPADES") {
    suite = "\u2660";
  } else if (card.suit === "DIAMONDS") {
    suite = "\u2666";
  } else if (card.suit === "CLUBS") {
    suite = "\u2663";
  }

  return `${card.value} of ${suite}`;
};

export default ({ cards, sort }) => {

  const transformArr = (card, lit) => {
      if (card.value === "10") {
        return {
          ...card,
          code: `10${lit}`
        }
      } else
      if (card.value === "JACK") {
        return {
          ...card,
          code: `11${lit}`
        }
      } else
      if (card.value === "QUEEN") {
        return {
          ...card,
          code: `12${lit}`
        }
      } else
      if (card.value === "KING") {
        return {
          ...card,
          code: `13${lit}`
        }
      } else
      if (card.value === "ACE") {
        return {
          ...card,
          code: `14${lit}`
        }
      }
      return card
    };
  const sorting = (prop, arr) => {
    prop = prop.split('.');
    const len = prop.length;

    arr.sort( (a, b) => {
      let i = 0;
      while( i < len ) {
        a = a[prop[i]];
        b = b[prop[i]];
        i++;
      }
      a = String(a);
      b = String(b);

      return a.localeCompare(b, undefined, {numeric: true})
    });
    return arr;
  };

  const diamonds = cards.filter(({suit}) => suit === "DIAMONDS").map((card) => transformArr(card, 'D'));
  const hearts = cards.filter(({suit}) => suit === "HEARTS").map((card) => transformArr(card, 'H'));
  const clubs = cards.filter(({suit}) => suit === "CLUBS").map((card) => transformArr(card, 'C'));
  const spades = cards.filter(({suit}) => suit === "SPADES").map((card) => transformArr(card, 'S'));

  const sortDiamonds = sorting('code', diamonds);
  const sortHearts = sorting('code', hearts);
  const sortClubs = sorting('code', clubs);
  const sortSpades = sorting('code', spades);

  const newArrayCards = sortDiamonds.concat(sortHearts, sortClubs, sortSpades);

  const sortCards = sort ? newArrayCards : cards;

  return (
      <ul className="cards mw8-ns">
        {sortCards.map(card => (
            <li key={card.code}>
              <img src={card.image} alt={getLabel(card)}/>
            </li>
        ))}
      </ul>
  )
};
