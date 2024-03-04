import React from "react";

function Log({ turns }) {
  function getUniqueKey(turn) {
    if (!!turn) return;
    return `${turn.square.row} - ${turn.square.col}`;
  }
  return (
    <div>
      <ol id="log">
        {turns.map((turn) => (
          <li key={`${turn.square.row} - ${turn.square.col}`}>
            {turn.player} selected square: {turn.square.row} - {turn.square.col}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Log;
