import React from "react";
import './App.css';
import allCountryScores from "./data/allCountryScores";
import HighScoreTable from "./HighScoreTable";


function App() {
  return (
    <div className="App">
		<h1>High scores per country</h1>
		{allCountryScores.map((el, index) => (
			<div key={index} className="tableDiv">
			<HighScoreTable country={el} />
			</div>
		))}
    </div>
  );
}

export default App;
