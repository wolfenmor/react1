import "./App.css"
import {useEffect} from "react";
import {getAll} from "./components/services/services.api";
import Posts from "./components/Posts/Posts"; // брать
function App() {



  useEffect(() => {
    getAll().then(value => console.log(value.data))
  }, [])
  return (
    <div>
<Posts></Posts>
    </div>
  );
}

export default App; // отдавать
