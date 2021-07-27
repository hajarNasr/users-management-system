import { useState, useEffect } from "react";
import axios from "axios";
import { mainURL } from "./helper";

import Header from "./components/Header";
import AddUserBtn from "./components/AddUserBtn";
import CreateUserForm from "./components/CreateUserForm";
import UsersList from "./components/UsersList";

import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [isShowForm, setIsShowForm] = useState(false);
  const [userToEdit, setUserToEdit] = useState(null);

  const showForm = () => setIsShowForm(true);
  const hideForm = () => setIsShowForm(false);

  useEffect(() => {
    axios
      .get(`${mainURL}/users?page=1&pageSize=20`)
      .then((resp) => {
        setUsers(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const displayForm = (user) => {
    setUserToEdit(user ? user : null);
    showForm();
  };

  return (
    <div className="App">
      <Header
        title={`Users ${
          isShowForm ? `- ${userToEdit ? "Edit" : "Create New"} User` : ""
        }`}
      />
      <UsersList users={users} editUser={displayForm} />
      <AddUserBtn onClick={displayForm} />
      {isShowForm && (
        <CreateUserForm hideForm={hideForm} userToEdit={userToEdit} />
      )}
    </div>
  );
}

export default App;
