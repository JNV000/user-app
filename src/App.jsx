import Login from "./components/Login";
import React, { useEffect } from "react"; // could also import useEffect directly
import apiService from "./services/api.service";

function App() {
  return (
    <main className="flex justify-center">
      <Login />
    </main>
  );
}

export default App;
