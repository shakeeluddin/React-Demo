import Login from "./login"
import LoginControl from "./LoginControl"
import FilmRequest from "./MovieSearch"
function App() {
  

    const address= {
      forename:"Shakeel",
      surname: "uddin",
      city: "london",
    }
  
    return (
      <div>
        <h1>{address.forename}</h1>
        <h1>{address.surname}</h1>
        <h1>{address.city}</h1>
        <br/>
        <Login/>
        <LoginControl/>
      </div>
    );
    }
export default App;



