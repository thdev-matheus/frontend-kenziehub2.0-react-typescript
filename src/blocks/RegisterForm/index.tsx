import * as S from "./styles";
import * as C from "../../components";
import { HiOutlineMail } from "react-icons/hi";
import { FiLock, FiUnlock, FiUser, FiPhone } from "react-icons/fi";
import { RiFileUserLine } from "react-icons/ri";
import { useState } from "react";

export const RegisterForm = () => {
  const [activeOpt, setActiveOpt] = useState<string>("opção1");
  const options = ["opção1", "opção2", "opção3", "opção4"];

  return (
    <S.Container>
      <div>
        <h1>Crie sua conta</h1>
        <span>Rápido e grátis, vamos nessa</span>
      </div>
      <form>
        <C.Input
          icon={FiUser}
          borderRadius="4px"
          type="text"
          label="Nome"
          /* error="estado de erro" */
        />
        <C.Input
          icon={HiOutlineMail}
          borderRadius="4px"
          type="email"
          label="E-mail"
          /* error="estado de erro" */
        />
        <C.Input
          icon={FiLock}
          borderRadius="4px"
          type="password"
          label="Senha"
          /* error="estado de erro" */
        />
        <C.Input
          icon={FiLock}
          borderRadius="4px"
          type="password"
          label="Confirmar Senha"
          /* error="estado de erro" */
        />
        <C.Input
          icon={RiFileUserLine}
          borderRadius="4px"
          type="text"
          label="Bio"
          /* error="estado de erro" */
        />
        <C.Input
          icon={FiPhone}
          borderRadius="4px"
          type="text"
          label="Contato"
          isMask
          mask="(99) 9 9999-9999"
          /* error="estado de erro" */
        />
        <C.Select
          activeOpt={activeOpt}
          options={options}
          setAction={setActiveOpt}
          label="Selecionar Módulo"
        />
        <C.Button label="Entrar" height="2.5rem" type="submit" />
      </form>
    </S.Container>
  );
};
