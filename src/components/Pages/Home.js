import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3001/users");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3001/users/${id}`);
    loadUsers();
  };
  return (
    <div className="container">
      <h1>All Users</h1>
      <table class="table">
        <thead>
          <tr className="bg-dark text-white">
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Url</th>
            <th scope="col">ID</th>
            <th scope="col">Author's Name</th>
            <th scope="col">Released-Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.Url}</td>
              <td>{user.id}</td>
              <td>{user.Author}</td>
              <td>{user.ReleasedDate}</td>
              <td>
                <Link className="btn-primary m-2" to={`/user/${user.id}`}>
                  <i class="fa fa-eye" aria-hidden="true"></i>
                </Link>
                <Link className="btn-primary m-2" to={`/user/edit/${user.id}`}>
                  <i class="fa fa-pencil" aria-hidden="true"></i>
                </Link>
                <Link
                  className="btn-danger m-2"
                  onClick={() => deleteUser(user.id)}
                >
                  <i class="fa fa-trash" aria-hidden="true"></i>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Home;
