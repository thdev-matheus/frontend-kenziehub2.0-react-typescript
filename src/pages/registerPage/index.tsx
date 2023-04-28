import * as S from "./styles";
import * as C from "../../components";
import * as B from "../../blocks";
import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.BoxHeaderRegister>
        <C.Logo />
        <C.Button
          label="Voltar"
          width="5rem"
          height="2.5rem"
          bgColor="#252129"
          hBgColor="#343B41"
          fontSize="10pt"
          onAction={() => navigate("/login")}
        />
      </S.BoxHeaderRegister>
      <B.RegisterForm />
    </S.Container>
  );
};
