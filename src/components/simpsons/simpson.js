const Simpson = ({user}) => {
    return (
        <>
            <div id={"box"}>{user.name} {user.surname} {user.age} {user.info} <img src={user.photo} alt={"memberOfFamily"}/></div>
        </>
    );
};

export default Simpson;