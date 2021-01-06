import React from "react";
import PlayerScore from "./PlayerScore";

const HighScoreTable = (props) => {

	const sortedScores = props.country.scores.sort((a,b) => a.s < b.s)

	return (		
		<table class="table">
			<h2>HIGH SCORES: {props.country.name}</h2>
			<tbody>
				{sortedScores.map((el, index) => (<PlayerScore scores={el} key={index}/>))}
			</tbody>
    	</table>
	)
}

export default HighScoreTable;