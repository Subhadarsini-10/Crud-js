import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUsers = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    Url: "",
    id: "",
    Author: "",
    ReleasedDate: "",
  });

  const { name, Url, id, Author, ReleasedDate } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3001/users", user);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5 form-group">
        <h2 className="text-center mb-4">Create a user</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter the name of the game"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter the url"
              name="Url"
              value={Url}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter the id"
              name="id"
              value={id}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter the author's name"
              name="Author"
              value={Author}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter the released date"
              name="ReleasedDate"
              value={ReleasedDate}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Create User</button>
        </form>
      </div>
    </div>
  );
};

export default AddUsers;
