import "./App.css"
import {useEffect, useState} from "react";
import SpaceX from "./components/SpaceXs/SpaceX";
import SpaceXs from "./components/SpaceXs/SpaceXs";
import {getSpaceXs} from "./components/services/Services.api";

function App() {
  const [space, setSpace] = useState([])

  useEffect(() => {
    getSpaceXs()
        .then(value => setSpace(value))
  }, [])

  const filteredSpace = space.filter(value => value.launch_year !== "2020")
  return (
    <>
      <SpaceXs item={filteredSpace}></SpaceXs>
    </>
  );
}
export default App; // брать