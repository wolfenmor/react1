
const Simpson = ({simpson}) => {
    const {id, name, surname, age, info, photo} = simpson
    return (
        <div>
            <div>{id}</div>
            <div>{name}</div>
            <div>{surname}</div>
            <div>{age}</div>
            <p>{info}</p>
            <img src={photo} alt={name}/>
        </div>
    );
};

export {Simpson};
