import { useState } from "react"

export default function Players({ playerName, symbol, isActive, onPlayerChange }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newPlayerName, setPlayerName] = useState(playerName);
    let editedPlayer = <span className="player-name">{newPlayerName}</span>

    if (isEditing) {
        editedPlayer = <input type="text" required value={newPlayerName} 
        onChange={(e) => setPlayerName(e.target.value)} />
    }
    function EditPlayer() {
        setIsEditing(editing => !editing);
        if (isEditing) {
            onPlayerChange(symbol, newPlayerName);
        }
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editedPlayer}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={EditPlayer}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}