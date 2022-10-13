import Login from "./login"

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
      </div>
    );
    }
export default App;



