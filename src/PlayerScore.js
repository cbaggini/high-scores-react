import React from "react";

const PlayerScore = (props) => {
	return (
		<tr className="border_bottom">
			<th>{props.scores.n}</th>
			<td>{props.scores.s}</td>
		</tr>		
	);
}
 
export default PlayerScore;