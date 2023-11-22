import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import UsersService from "../../services/usersService/UsersService";
import AuthService from "../../services/usersService/AuthService";

const RegisterForm = () => {
  const navigate = useNavigate()

  const initialUserState = {
    id: null,
    name: "",
    username: "",
    password: "",
    discriminator: "user",
    published: false
  };
  const [user, setUser] = useState(initialUserState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const register = () => {
    var data = {
      name: user.name,
      username: user.username,
      password: user.password,
      discriminator: user.discriminator
    };

    AuthService.register(data)
      .then(response => {
        setUser({
          id: response.data.id,
          name: response.data.name,
          username: response.data.username,
          password: response.data.password,
          published: response.data.published
        });
        setSubmitted(true);
        // UsersService.getAll()
        navigate("/home")
      })
  };

  return (
    <div>
      <div className="form-group">
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          className="form-control"
          id="name"
          required
          value={user.number}
          onChange={handleInputChange}
          name="name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="username">Nombre de usuario</label>
        <input
          type="text"
          className="form-control"
          id="username"
          required
          value={user.username}
          onChange={handleInputChange}
          name="username"
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          className="form-control"
          id="password"
          required
          value={user.password}
          onChange={handleInputChange}
          name="password"
        />
      </div>

      <button onClick={register} className="btn btn-success">
        Registrar
      </button>
    </div>
  )
};

export default RegisterForm