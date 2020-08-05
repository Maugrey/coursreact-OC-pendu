import React from "react";
import PropTypes from "prop-types";
import "./Word.css";

const Word = ({ word, letters }) => {
  return <div className="word">{computeDisplay(word, letters.split(""))}</div>;
};

// Produit une représentation textuelle de l’état de la partie,
// chaque lettre non découverte étant représentée par un _underscore_.
// (CSS assurera de l’espacement entre les lettres pour mieux
// visualiser le tout).
export function computeDisplay(phrase, usedLetters) {
  return phrase.replace(/\w/g, (letter) =>
    usedLetters.includes(letter) ? letter : "_"
  );
}

Word.propTypes = {
  word: PropTypes.string.isRequired,
  letters: PropTypes.string,
};

Word.defaultProps = {
  letters: "",
};

export default Word;
