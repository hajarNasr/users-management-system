import { useEffect, useState } from "react";
import { CountryDropdown } from "react-country-region-selector";
import { countries, getCountryCode, headers, mainURL } from "../helper";
import axios from "axios";

const CreateUserForm = ({ hideForm, userToEdit }) => {
  const initUser = {
    firstName: "",
    lastName: "",
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
    user.balance = +user.balance;
    if (userToEdit) {
      axios
        .patch(
          `${mainURL}/users/${user.id}`,
          {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            country: user.country,
            balance: user.balance,
            title: user.title,
          },
          { headers }
        )
        .then((resp) => {
          hideForm();
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .post(`${mainURL}/users`, user, {
          headers,
        })
        .then((resp) => {
          hideForm();
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="form-wrapper">
      <form className="create-user-form">
        <InputField
          value={user.firstName}
          type="text"
          placeholder="First Name"
          onChange={changeInputValue}
          id="firstName"
        />
        <InputField
          value={user.lastName}
          type="text"
          placeholder="Last Name"
          onChange={changeInputValue}
          id="lastName"
        />
        <InputField
          value={user.email}
          type="email"
          placeholder="Email"
          onChange={changeInputValue}
          id="email"
        />
        <label>
          <CountryDropdown
            value={countries[user.country]}
            onChange={(country) => {
              setUser({ ...user, country: getCountryCode(country) });
            }}
          />
        </label>
        <InputField
          value={user.balance}
          type="number"
          placeholder="Balance"
          onChange={changeInputValue}
          id="balance"
        />
        <InputField
          value={user.title}
          type="text"
          placeholder="Title"
          onChange={changeInputValue}
          id="title"
        />
        <div className="form-btns-wrapper">
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={hideForm}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

const InputField = ({ type, value, placeholder, onChange, id }) => {
  const handleChange = (e) => {
    onChange(id, e.target.value);
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
