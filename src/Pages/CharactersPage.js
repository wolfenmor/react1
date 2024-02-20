import {useParams} from "react-router-dom";
import Characters from "../components/CharactersComponents/Characters";

const CharactersPage = () => {
    const {ids} = useParams();
    console.log(ids)
    return (
        <div>
           <Characters ids={ids} />
        </div>
    );
};

export default CharactersPage;