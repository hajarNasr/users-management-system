import { useState } from "react";

import Header from "./components/Header";
import AddUserBtn from "./components/AddUserBtn";

import "./App.css";

function App() {
  const [isShowForm, setIsShowForm] = useState(false);

  const showForm = () => setIsShowForm(true);

  return (
    <div className="App">
      <Header title="Users" />
      <AddUserBtn onClick={showForm} />
    </div>
  );
}

export default App;
