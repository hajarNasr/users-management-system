import UserItem from "./UserItem";

const UsersList = ({ users, editUser }) => {
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
