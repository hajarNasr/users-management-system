import { useState } from "react";

import Header from "./components/Header";
import AddUserBtn from "./components/AddUserBtn";
import CreateUserForm from "./components/CreateUserForm";

import "./App.css";

function App() {
  const [isShowForm, setIsShowForm] = useState(false);

  const showForm = () => setIsShowForm(true);
  const hideForm = () => setIsShowForm(false);

  return (
    <div className="App">
      <Header title={`Users ${isShowForm ? "- Create New User" : ""}`} />
      <AddUserBtn onClick={showForm} />
      {isShowForm && <CreateUserForm hideForm={hideForm} />}
    </div>
  );
}

export default App;
