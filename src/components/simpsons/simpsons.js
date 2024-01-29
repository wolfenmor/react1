import Simpson from "./simpson";
const Simpsons = ({item: simpson}) => {
    return (
        <div id={"simpsons-container"}>
            {
                simpson.map((value, index) => <Simpson user={value} key={index}></Simpson>)
            }

        </div>
    );
}

export default Simpsons;