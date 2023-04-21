import * as S from "./styles";
import * as C from "../../components";
import { HiOutlineMail } from "react-icons/hi";
import { FiLock, FiUnlock } from "react-icons/fi";
import { useState } from "react";

export const LoginForm = () => {
  const [icon, setIcon] = useState<string>("lock");

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
      </form>
    </S.Container>
  );
};
