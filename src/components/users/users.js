import User from "./user";
function Users({item: user}) {
    return (
      <div>
          {
              user.map((value) => <User user={value} key={value.id}></User>)
          }
      </div>
    );
}
export default Users;