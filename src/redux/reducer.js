import { ACTIONS } from "./action";

const defaultState = {
  deck: {
    has_cards: false
  },
  blackCards: '',
  sort: false,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.SET_CARDS: {
      const { deck, cards } = action.payload;
      console.log(deck)
      return {
        ...state,
        deck,
        cards
      };
    }

    case ACTIONS.SET_DECK: {
      const setDeck = state.deck.cards;
      const blackFilter = setDeck.filter(({suit}) => suit === 'CLUBS' || suit === 'SPADES' );

      const numbers = blackFilter.map((obj) => {
        if (obj.value === 'JACK') {
          return 10
        } else
        if (obj.value === 'QUEEN') {
          return 10
        } else
        if (obj.value === 'KING') {
          return 10
        } else
        if (obj.value === 'ACE') {
          return 1
        }
        return Number(obj.value)
      });

      const sumSalaries = (arr) => {
        let sum = 0;
        for (let val of Object.values(arr)) {
          sum += val;
        }
        return sum;
      };
      const blackCardsSum = sumSalaries(numbers);

      return {
        ...state,
        blackCards: blackCardsSum,
      }
    }

    case ACTIONS.SORT_DECK: {
      return {
        ...state,
        sort: action.payload,
      };
    }

    default:
      return state;
  }
};

export default reducer;
