const GameRoom = ({players}) => {

    const Display = ({playerName}) => <li>{playerName}</li>
    return (
        <ul ClassName="previousSearch">
            {players.map((playerName,i) => (
                <Display
                playerName={playerName}
                //prevent duplicate keys by appending index:
                key={i}
            />

            ))}

        </ul>
    );
}

export default GameRoom;