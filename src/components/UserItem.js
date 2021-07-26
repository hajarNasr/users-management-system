import { countries } from "../helper";

const UserItem = ({ user, editUser }) => {
  const handleEditUser = (user) => {
    editUser(user);
  };
  return (
    <li>
      <div className="user-img"></div>
      <UserInfo user={user} />
      <UserBalance balance={user.balance} />
      <button onClick={() => handleEditUser(user)}>Edit</button>
    </li>
  );
};

const UserInfo = ({ user }) => {
  const { firstName, lastName, country, title } = user;
  return (
    <div>
      <p>
        {firstName} {lastName}
      </p>
      <p>{title}</p>
      <p>{countries[country]}</p>
    </div>
  );
};

const UserBalance = ({ balance }) => {
  return <div>${Number(balance).toLocaleString()}</div>;
};

export default UserItem;
