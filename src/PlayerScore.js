import React from "react";

const PlayerScore = ({ scores }) => {
  return (
    <tr className="border_bottom">
      <th>{scores.n}</th>
      <td>{scores.s}</td>
    </tr>
  );
};

export default PlayerScore;
