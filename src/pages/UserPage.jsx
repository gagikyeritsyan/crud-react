import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function UserPage() {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    loadingData();
  }, [])

  const loadingData = async () => {
    const res = await axios.get(`http://localhost:8000/users/${id}`);
    setUser(res.data);
  }

  return (
    <div className="UserPage">
      <Link to={-1} className="goBackBtn">Go Back</Link>

      <h2>UserPage - <span>{user.name} {user.surname}</span> </h2>

      <table>
        <tbody>
          {
            Object.entries(user).map(([key, value]) => (
              <tr key={key}>
                <th>{key.charAt(0).toUpperCase() + key.slice(1)}</th>
                <td>{value}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}