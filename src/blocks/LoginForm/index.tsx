import * as S from "./styles";
import * as C from "../../components";
import { HiOutlineMail } from "react-icons/hi";
import { FiLock, FiUnlock } from "react-icons/fi";
import { useState } from "react";
import { useNavigate, useRevalidator } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IUserLogin } from "../../types/user";
import { userLoginSchema } from "../../schemas/user";

export const LoginForm = () => {
  const [icon, setIcon] = useState<string>("lock");

  const navigate = useNavigate();

  const changeIcon = () => setIcon(icon === "lock" ? "unlock" : "lock");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>({
    resolver: zodResolver(userLoginSchema),
    reValidateMode: "onSubmit",
  });

  const handleLogin = async (data: IUserLogin) => {
    console.log(data);
  };

  return (
    <S.Container>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(handleLogin)}>
        <C.Input
          icon={HiOutlineMail}
          borderRadius="4px"
          iconAction={() => console.log("ação do ícone email")}
          type="text"
          label="E-mail"
          {...register("email")}
          error={errors.email?.message}
        />
        <C.Input
          icon={icon === "lock" ? FiLock : FiUnlock}
          borderRadius="4px"
          iconAction={() => changeIcon()}
          type="password"
          label="Password"
          {...register("password")}
          error={errors.password?.message}
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
