import React from "react";
import { connect } from "react-redux";

import { getDeck } from "../../redux/action";
import Deck from "../Deck";

const App = ({ deck, getDeck }) => (
  <div className="tc flex flex-column items-center justify-center">
    {deck ? (
      <Deck cards={deck.cards} />
    ) : (
      <button
        onClick={() => getDeck()}
        className="bg-animate bg-dark-pink hover-bg-light-pink b--dark-blue inline-flex items-center ma2 tc br2 bw3 dark-blue pa4 f1"
      >
        Open a Deck of Cards
      </button>
    )}
  </div>
);

const mapStateToProps = ({ deck }) => ({
  deck
});

export default connect(
  mapStateToProps,
  { getDeck }
)(App);
