import React from "react";
import User from "./User";

function Users({users}) {
    return (
      <div>
          {users.map(user=> <User user={user} key={user.id}/>)}
      </div>
    );
}
export default Users;