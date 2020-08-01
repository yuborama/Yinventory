import React from "react";
import "./Login.scss";
import onda from "../../assets/img/icons/onda.svg";
import Input from "../../components/atoms/Input/Input";

function Login() {
  return (
    <>
      <div className="Container">
        <h1>YuboInventy</h1>
        <div className="Card">
          <Input text="Contraseña"/>
          <Input text="Usuario"/>
          <div className="Directionrow">
            <p>
              <strong> olvidaste tu contraseña</strong>
            </p>
            <p>resetear</p>
          </div>
          <div className="Directionrow">
            <p>
              <strong>Aun no tienes cuenta</strong>
            </p>
            <p>crear cuenta</p>
          </div>
          <button className="Primary">Ingresar</button>
        </div>
        <img src={onda} className="Onda" alt="onda" />
      </div>
    </>
  );
}
export default Login;
