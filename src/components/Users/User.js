import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const User = () => {
  const [user, setUser] = useState({
    name: "",
    Url: "",
    id: "",
    Author: "",
    ReleasedDate: "",
  });

  const { id } = useParams();

  useEffect(() => {
    const loadUsers = async () => {
      const result = await axios.get(`http://localhost:3001/users/${id}`);
      setUser(result.data);
    };
    loadUsers();
  }, [id]);

  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        Back to Home
      </Link>
      <h2 className="display-4">User id: {id}</h2>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Name : {user.name}</li>
        <li className="list-group-item">Url : {user.Url}</li>
        <li className="list-group-item">Id : {user.id}</li>
        <li className="list-group-item">Author's Name : {user.Author}</li>
        <li className="list-group-item">Released Date : {user.ReleasedDate}</li>
      </ul>
    </div>
  );
};

export default User;
