import * as S from "./styles";
import * as C from "../../components";

export const LoginForm = () => {
  return (
    <S.Container>
      <h1>Login</h1>
      <form>
        <C.Input label="E-mail" error="estado de erro" />
        <C.Input type="password" label="Password" error="estado de erro" />
      </form>
    </S.Container>
  );
};
