import User from "./User";
function Users({item: user}) {
    return (
      <div>
          {
              user.map((value, index) => <User user={value} key={index}></User>)
          }
      </div>
    );
}
export default Users;