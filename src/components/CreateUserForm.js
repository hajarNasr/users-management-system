import { useState } from "react";
import { CountryDropdown } from "react-country-region-selector";
import { countries } from "../helper";

const CreateUserForm = ({ hideForm, userToEdit }) => {
  const initUser = {
    firstname: "",
    lastname: "",
    email: "",
    country: "",
    balance: "",
    title: "",
  };
  const [user, setUser] = useState(userToEdit ? userToEdit : initUser);

  const changeInputValue = (key, value) => {
    setUser({ ...user, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form-wrapper">
      <form className="create-user-form">
        <InputField
          value={user.firstName}
          type="text"
          placeholder="First Name"
          onChange={changeInputValue}
        />
        <InputField
          value={user.lastName}
          type="text"
          placeholder="Last Name"
          onChange={changeInputValue}
        />
        <InputField
          value={user.email}
          type="email"
          placeholder="Email"
          onChange={changeInputValue}
        />
        <CountryDropdown
          value={countries[user.country]}
          onChange={(country) => {
            setUser({ ...user, country });
          }}
        />
        <InputField
          value={user.balance}
          type="number"
          placeholder="Balance"
          onChange={changeInputValue}
        />
        <InputField
          value={user.title}
          type="text"
          placeholder="Title"
          onChange={changeInputValue}
        />
        <div className="form-btns-wrapper">
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={hideForm}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

const InputField = ({ type, value, placeholder, onChange }) => {
  const handleChange = (e) => {
    const key = placeholder.replace(/ /g, "").toLowerCase();
    console.log(e.target.value, key);
    onChange(key, e.target.value);
  };

  return (
    <label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </label>
  );
};

export default CreateUserForm;
