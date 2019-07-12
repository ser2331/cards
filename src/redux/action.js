// types of action
export const ACTIONS = {
  SET_DECK: "SET_DECK",
  SET_CARDS: "SET_CARDS",
  SHUFFLE_CARDS: "SHUFFLE_CARDS",
  SORT_DECK: "SORT_DECK"
};

// actions
export function getDeck() {
  return async dispatch => {
    const deck = await fetch("/api/deck/new/shuffle/?deck_count=1").then(
      response => response.json()
    );
    const cards = await fetch(
      `/api/deck/${deck.deck_id}/draw/?count=${deck.remaining}`
    ).then(response => response.json());

    dispatch({
      type: ACTIONS.SET_CARDS,
      payload: {
        deck: cards
      }
    });
  };
}

export function shuffleDeck() {
  return dispatch => {};
}
export function sumDeck() {
  return dispatch => {};
}
export function sortDeck() {
  return dispatch => {};
}
