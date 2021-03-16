import React from "react";
import PlayerScore from "./PlayerScore";

const HighScoreTable = ({ country }) => {
  return (
    <section className="country">
      <h2>HIGH SCORES: {country.name}</h2>
      <table className="table">
        <tbody>
          {country.scores.map((el, index) => (
            <PlayerScore scores={el} key={index} />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default HighScoreTable;
