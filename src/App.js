import "./App.css"
import {useEffect, useState} from "react";
import SpaceX from "./components/SpaceXs/SpaceX";

function App() {
  const [space, setSpace] = useState([])

  useEffect(() => {
    fetch('https://api.spacexdata.com/v3/launches')
        .then(response => response.json())
        .then(json => {setSpace(json)})
  }, [])

  const filteredSpace = space.filter(value => value.launch_year !== "2020")
  return (
    <div>
      {
        filteredSpace.map(value => <SpaceX value={value} key={value.flight_number}></SpaceX>)
      }
    </div>
  );
}
export default App; // брать