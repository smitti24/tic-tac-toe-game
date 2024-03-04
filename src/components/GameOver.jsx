import React from "react";

function GameOver({ winner, OnRestart }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>It's a draw</p>}
      <button onClick={OnRestart}>Restart</button>
    </div>
  );
}

export default GameOver;
