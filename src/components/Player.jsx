import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  const handleEdit = () => {
    setIsEditing((editing) => !editing);
  };

  const handleChange = (e) => {
    setPlayerName(e.target.value);
  };

  return (
    <li className={isEditing ? "active" : ""}>
      <span className="player">
        {isEditing ? (
          <input
            className="highlight-player"
            type="text"
            value={playerName} // Sets an initial value
            required
            onChange={handleChange}
          /> // This is two way binding...
        ) : (
          <span className="player-name">{playerName}</span>
        )}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
