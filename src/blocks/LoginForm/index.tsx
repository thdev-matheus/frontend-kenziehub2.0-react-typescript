import * as S from "./styles";
import * as C from "../../components";
import { HiOutlineMail } from "react-icons/hi";
import { FiLock, FiUnlock } from "react-icons/fi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const [icon, setIcon] = useState<string>("lock");

  const navigate = useNavigate();

  const changeIcon = () => setIcon(icon === "lock" ? "unlock" : "lock");

  return (
    <S.Container>
      <h1>Login</h1>
      <form>
        <C.Input
          icon={HiOutlineMail}
          borderRadius="4px"
          iconAction={() => console.log("ação do ícone email")}
          type="email"
          label="E-mail"
          /* error="estado de erro" */
        />
        <C.Input
          icon={icon === "lock" ? FiLock : FiUnlock}
          borderRadius="4px"
          iconAction={() => changeIcon()}
          type="password"
          label="Password"
          /* error="estado de erro" */
        />
        <C.Button label="Entrar" height="2.5rem" type="submit" />
      </form>

      <S.BoxRegister>
        <h3>Ainda não possui uma conta?</h3>
        <C.Button
          label="Cadastre-se"
          height="2.5rem"
          type="button"
          bgColor="#868e96"
          hBgColor="#343B41"
          onAction={() => navigate("/register")}
        />
      </S.BoxRegister>
    </S.Container>
  );
};
