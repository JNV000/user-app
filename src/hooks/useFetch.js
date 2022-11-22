import apiService from "../services/api.service";
import { useState } from "react";

export default function useFect() {
  const [users, setUsers] = useState([]);

  // get all users
  const getUsers = () => {
    apiService.getAllUsers().then((users) => setUsers(users));
  };

  // return the users
  return [users, setUsers, getUsers];
}
