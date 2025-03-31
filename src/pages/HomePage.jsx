import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserList from "../components/UserList";
import axios from "axios";

export default function HomePage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadingData();
  }, [])

  const loadingData = async () => {
    try {
      const res = await axios.get('http://localhost:8000/users');
      setUsers(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const removeUser = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/users/${id}`);
      const newUsers = users.filter(user => user.id !== id);
      setUsers(newUsers);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="HomePage">
      <Link className="add-user-btn" to={'/user/add'}>Add User</Link>
      <UserList users={users} removeUser={removeUser} />
    </div>
  )
}
