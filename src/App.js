import { useState } from "react";

import Header from "./components/Header";
import AddUserBtn from "./components/AddUserBtn";
import CreateUserForm from "./components/CreateUserForm";
import UsersList from "./components/UsersList";

import "./App.css";

function App() {
  const [isShowForm, setIsShowForm] = useState(false);
  const [userToEdit, setUserToEdit] = useState(null);

  const showForm = () => setIsShowForm(true);
  const hideForm = () => setIsShowForm(false);

  const editUser = (user) => {
    setUserToEdit(user);
    showForm();
  };

  return (
    <div className="App">
      <Header
        title={`Users ${
          isShowForm ? `- ${userToEdit ? "Edit" : "Create New"} User` : ""
        }`}
      />
      <UsersList editUser={editUser} />
      <AddUserBtn onClick={showForm} />
      {isShowForm && (
        <CreateUserForm hideForm={hideForm} userToEdit={userToEdit} />
      )}
    </div>
  );
}

export default App;
