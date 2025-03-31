import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";

export default function AddUserPage() {
  const [user, setUser] = useState({
    name: "", email: "", phone: "", surname: "", username: "", address: "", age: ""
  });

  const navigate = useNavigate();

  const onChangeInput = (event) => {
    setUser({...user, [event.target.name]: event.target.value});
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    await axios.post('http://localhost:8000/users', user);
    navigate(-1);
  }
    
  return (
    <div className="AddUserPage">
      <Link to={-1} className="goBackBtn">Go Back</Link>
      <h2>Add User</h2>

      <form onSubmit={onSubmit}>
        <div className="box">
          <label>Name:</label>
          <input type="text" placeholder="name" value={user.name} name="name" onChange={onChangeInput} />
        </div>

        <div className="box">
          <label>Surname:</label>
          <input type="text" placeholder="surname" value={user.surname} name="surname" onChange={onChangeInput}  />
        </div>

        <div className="box">
          <label>Username:</label>
          <input type="text" placeholder="username" value={user.username} name="username" onChange={onChangeInput} />
        </div>

        <div className="box">
          <label>Email:</label>
          <input type="email" placeholder="email" value={user.email} name="email" onChange={onChangeInput} />
        </div>

        <div className="box">
          <label>Telephone:</label>
          <input type="tel" placeholder="phone" value={user.phone} name="phone" onChange={onChangeInput} />
        </div>

        <div className="box">
          <label>Address:</label>
          <input type="text" placeholder="address" value={user.address} name="address" onChange={onChangeInput} />
        </div>

        <div className="box">
          <label>Age:</label>
          <input type="number" placeholder="age" value={user.age} name="age" onChange={onChangeInput} />
        </div>

        <input type="submit" value="Add user" />
      </form>
    </div>
  )
}
