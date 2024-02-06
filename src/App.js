import "./App.css"
import {useEffect, useState} from "react";
import SpaceXs from "./components/SpaceXs/SpaceXs";
import {getSpaceXs} from "./components/services/Services.api";

function App() {
  return (
    <>
      <SpaceXs></SpaceXs>
    </>
  );
}
export default App;