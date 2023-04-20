import * as T from "./types";
import * as S from "./styles";

export const Logo = ({ fontSize }: T.ILogoProps) => {
  !fontSize && (fontSize = "18pt");

  return <S.StyledLogo fontSize={fontSize}>Kenzie Hub</S.StyledLogo>;
};
