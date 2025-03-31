import { Link } from "react-router-dom";

export default function UserList({ users, removeUser }) {
    return (
        <table className="UserList">
            <thead>
                <tr>
                    <th>N</th>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                {
                    users.map((user, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link to={`/user/${user.id}`}>View</Link>
                                <Link to={`/user/edit/${user.id}`}>Edit</Link>
                                <button onClick={() => removeUser(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
