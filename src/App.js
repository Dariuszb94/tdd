import React from "react";
import "./App.css";
import UsersList from "./Components/UsersList";
import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      <Counter />
      <UsersList />
      <input />
    </div>
  );
}

export default App;
