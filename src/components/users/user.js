const User = ({user}) => {
    return (
        <div>
            <div>{user.name} {user.age} {user.status.toString()}</div>
        </div>
    );
};
export default User;