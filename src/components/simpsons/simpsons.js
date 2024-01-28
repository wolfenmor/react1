import Simpson from "./simpson";
const Simpsons = ({item: simpson}) => {
    return (
        <>
            {
                simpson.map((value, index) => <Simpson user={value} key={index}></Simpson>)
            }

        </>
    );
}

export default Simpsons;