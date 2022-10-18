import {useState} from 'react';
import AddGamers from './AddGamers';
import GameRoom from './GameRoom';

const Game = () => {

    const [playerName,setPlayerName] = useState("");
    const [players,setPlayers] = useState([]);

    const newPlayer = ({ target}) => {
        setPlayerName (target.value)
    }
const SubmitForm = (event) => {
    //prevent from submission
    event.preventDefault();
}

const handleAdd = () => {
    //save player name state to array
    setPlayers(players =>[...players,playerName]);
}

return (
    <>
    <AddGamers submitHandler={submitForm} newPlayers = {newPlayer} handleAdd={handleAdd}/>
    <gameRoom players={players}/>
    </>
)

export default Game;


}

