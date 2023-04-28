import * as S from "./styles";
import * as C from "../../components";
import { HiOutlineMail } from "react-icons/hi";
import { FiLock, FiUnlock, FiUser, FiPhone } from "react-icons/fi";
import { RiFileUserLine } from "react-icons/ri";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IUserRegister } from "../../types/user";
import { userRegisterSchema } from "../../schemas/user";
import { zodResolver } from "@hookform/resolvers/zod";

export const RegisterForm = () => {
  const [activeOpt, setActiveOpt] = useState<string>("opção1");
  const options = ["opção1", "opção2", "opção3", "opção4"];

  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm<IUserRegister>({
    resolver: zodResolver(userRegisterSchema),
    reValidateMode: "onSubmit",
  });

  const handleRegister = async (data: IUserRegister) => {
    console.log(data);
    // reset();
  };

  return (
    <S.Container>
      <div>
        <h1>Crie sua conta</h1>
        <span>Rápido e grátis, vamos nessa</span>
      </div>
      <form onSubmit={handleSubmit(handleRegister)}>
        <C.Input
          icon={FiUser}
          borderRadius="4px"
          type="text"
          label="Nome"
          {...register("name")}
          error={errors.name?.message}
        />
        <C.Input
          icon={HiOutlineMail}
          borderRadius="4px"
          type="email"
          label="E-mail"
          {...register("email")}
          error={errors.email?.message}
        />
        <C.Input
          icon={FiLock}
          borderRadius="4px"
          type="password"
          label="Senha"
          {...register("password")}
          error={errors.password?.message}
        />
        <C.Input
          icon={FiLock}
          borderRadius="4px"
          type="password"
          label="Confirmar Senha"
          {...register("confirmPassword")}
          error={errors.confirmPassword?.message}
        />
        <C.Input
          icon={RiFileUserLine}
          borderRadius="4px"
          type="text"
          label="Bio"
          {...register("bio")}
          error={errors.bio?.message}
        />
        <C.Input
          icon={FiPhone}
          borderRadius="4px"
          type="text"
          label="Contato"
          isMask
          mask="(99) 9 9999-9999"
          {...register("contact")}
          error={errors.contact?.message}
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
