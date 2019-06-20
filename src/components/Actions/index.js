import React from "react";
import { connect } from "react-redux";
import { shuffleDeck, sortDeck, sumDeck } from "../../redux/action";

class Actions extends React.Component {
  sortDeck() {
    this.props.sortDeck();
  }

  shuffleDeck() {
    this.props.shuffleDeck();
  }

  async sumDeck() {
    const sum = await this.props.sumDeck();
    alert(sum);
  }

  render() {
    return (
      <div className="flex items-center justify-center">
        <button
          onClick={() => this.sortDeck()}
          className="bg-animate bg-dark-pink hover-bg-light-pink b--white inline-flex items-center ma2 tc br3 white bw1 b pa2"
        >
          Sort Cards into suits
        </button>
        <button
          onClick={() => this.sumDeck()}
          className="bg-animate bg-dark-pink hover-bg-light-pink b--white inline-flex items-center ma2 tc br3 white bw1 b pa2"
        >
          Add Up Value of Black Cards
        </button>
        <button
          onClick={() => this.shuffleDeck()}
          className="bg-animate bg-dark-pink hover-bg-light-pink b--white inline-flex items-center ma2 tc br3 white bw1 b pa2"
        >
          Shuffle Deck
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { shuffleDeck, sortDeck, sumDeck }
)(Actions);
