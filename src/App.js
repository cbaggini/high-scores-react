import React, { useState } from "react";
import "./App.css";
import allCountryScores from "./data/allCountryScores";
import HighScoreTable from "./HighScoreTable";
import PlayerScore from "./PlayerScore";

function App() {
  const sortedCountries = allCountryScores
    .concat()
    .sort((a, b) => a.name > b.name);
  const descendingScores = sortedCountries.concat().map((el) => {
    return { ...el, scores: el.scores.concat().sort((a, b) => b.s - a.s) };
  });
  const ascendingScores = sortedCountries.concat().map((el) => {
    return { ...el, scores: el.scores.concat().sort((a, b) => a.s - b.s) };
  });
  let allScores = [];
  for (let i = 0; i < allCountryScores.length; i++) {
    allScores = allScores.concat(allCountryScores[i].scores);
  }
  allScores.sort((a, b) => b.s - a.s);

  const [isSorted, setIsSorted] = useState(true);
  const [scores, setScores] = useState(descendingScores);

  const sortScores = () => {
    setIsSorted(!isSorted);
    if (isSorted) {
      setScores(ascendingScores);
    } else {
      setScores(descendingScores);
    }
  };

  return (
    <div className="App">
      <h1>World high scores</h1>
      <section className="tableDiv">
        <table className="table">
          <tbody>
            {allScores.map((el, index) => (
              <PlayerScore scores={el} key={index} />
            ))}
          </tbody>
        </table>
      </section>
      <h1>High scores per country</h1>
      <button onClick={sortScores}>Sort scores</button>
      {scores.map((el, index) => (
        <div key={index} className="tableDiv">
          <HighScoreTable country={el} />
        </div>
      ))}
    </div>
  );
}

export default App;
