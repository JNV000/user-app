// import Login from "./components/Login";
import React, { useEffect } from "react"; // could also import useEffect directly
import apiService from "./services/api.service";
import useFetch from "./hooks/useFetch";

function App() {
  const [users, setUsers] = useFetch();

  useEffect(() => {
    apiService.getAllUsers().then((users) => setUsers(users));
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello World</h1>
      <ul>
        {users.length ? (
          users.map((user) => <li key={user.id}>{user.name}</li>)
        ) : (
          <li>Loading...</li>
        )}
      </ul>
    </>
  );
}

export default App;
