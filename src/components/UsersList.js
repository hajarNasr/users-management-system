import { useState, useEffect } from "react";
import axios from "axios";
import UserItem from "./UserItem";

const UsersList = ({ editUser }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://mysterious-wildwood-52860.herokuapp.com/v1/users?page=1&pageSize=20"
      )
      .then((resp) => {
        setUsers(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main>
      <ul className="users-list">
        {users.map((user) => (
          <UserItem user={user} key={user.email} editUser={editUser} />
        ))}
      </ul>
    </main>
  );
};

export default UsersList;
