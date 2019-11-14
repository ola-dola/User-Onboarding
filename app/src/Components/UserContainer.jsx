import React from "react";

function UserContainer(props) {
  return (
    <div>
      {props.userList.map((user, key) => {
        return (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        );
      })}
    </div>
  );
}

export default UserContainer;
