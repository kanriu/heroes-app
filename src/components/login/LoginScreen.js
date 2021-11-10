import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);

  const user = { name: "Snayder" };

  const handleLogin = () => {
    const lastPath = localStorage.getItem("lastPath") || "/";
    //history.push("/"); //se va a otra ruta
    dispatch({ type: types.login, payload: user });
    history.replace(lastPath); //se reemplaza a otra ruta(cuando se va para atras, ya no se va al login)
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button className="btn btn-primary" onClick={handleLogin}>
        Ingresar
      </button>
    </div>
  );
};

export default LoginScreen;
