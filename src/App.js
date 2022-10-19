import {
  BrowserRouter as Router,Link,Route,Routes,
}from 'react-router-dom';
import Home from './Routing/Home';
import Navigation from './Routing/Navigation';
import ParamsExample from './Routing/ParamsExample';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <h1>HEADER</h1>
        </header>
        <nav>
          <Link to="/home">
            Home
          </Link>
          <Navigation />
        </nav>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/params/:colour" element={<ParamsExample />} />
        </Routes>
        <footer>
          FOOTER
        </footer>
      </Router>
      {/* <Me name="Shakeel" age={30} job="Analyst"/> */}
      {/* {Me({ name: "SU", age: 30, job: "Analyst"})} */}
      {/* {Heading()} */}
      {/* <Heading/> */}
      {/* <Converter/> */}
      {/* <TrueFalse/> */}
      {/* <Counter/> */}
      {/* {
        people.map(person => {
          console.log("PERSON:", person);
          return <Person
          key={person.name + person.age}
          name={person.name}
          age={person.age}
          job={person.job}/>;
        })
      } */}
      {/* <Poke /> */}
      {/* <OMDB /> */}
    </div>
  );
}

export default App;


