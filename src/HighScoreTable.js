import React from "react";
import PlayerScore from "./PlayerScore";

const HighScoreTable = (props) => {
	return (
		// here table HTML + PlayerScore component for each row
		<table class="table">
			<h2>HIGH SCORES: {props.country.name}</h2>
			<tbody>
				{props.country.scores.map((el, index) => (<PlayerScore scores={el} />))}
			</tbody>
    	</table>
	)
}

export default HighScoreTable;