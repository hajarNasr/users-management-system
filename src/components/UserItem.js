import { countries } from "../helper";

const UserItem = ({ user, editUser }) => {
  const handleEditUser = (user) => {
    editUser(user);
  };
  return (
    <li>
      <div>
        <img src={user.avatar} alt="" className="user-img" />
      </div>
      <UserInfo user={user} />
      <UserBalance balance={user.balance} />
      <button onClick={() => handleEditUser(user)} className="edit-btn">
        Edit
      </button>
    </li>
  );
};

const UserInfo = ({ user }) => {
  const { firstName, lastName, country, title } = user;
  return (
    <div className="user-info">
      <p>
        {firstName} {lastName}
      </p>
      <p>{title}</p>
      <p>
        <span>{countries[country]}</span>
        <img
          src={`https://www.countryflags.io/${country}/flat/64.png`}
          alt=""
        />
      </p>
    </div>
  );
};

const UserBalance = ({ balance }) => {
  return (
    <div className="user-balance">${Number(balance).toLocaleString()}</div>
  );
};

export default UserItem;
