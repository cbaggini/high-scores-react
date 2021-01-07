import React from "react";
import PlayerScore from "./PlayerScore";

const HighScoreTable = (props) => {

	return (
		<section className="country">	
		<h2>HIGH SCORES: {props.country.name}</h2>	
		<table className="table">
			<tbody>
				{props.country.scores.map((el, index) => (<PlayerScore scores={el} key={index}/>))}
			</tbody>
    	</table>
		</section>
	)
}

export default HighScoreTable; 