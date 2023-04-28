import * as S from "./styles";
import * as T from "./types";

export const Button = ({
  label,
  bgColor,
  borderRadius,
  color,
  fontSize,
  hBgColor,
  hColor,
  height,
  icon: Icon,
  iconAfter = false,
  iconSize,
  onAction,
  type,
  width,
}: T.IButtonProps) => {
  return (
    <S.Container
      iconAfter={iconAfter}
      iconSize={iconSize}
      width={width}
      height={height}
      fontSize={fontSize}
      bgColor={bgColor}
      borderRadius={borderRadius}
      color={color}
      hBgColor={hBgColor}
      hColor={hColor}
      onClick={onAction}
      type={type}
    >
      {Icon && <Icon />}
      {label}
    </S.Container>
  );
};
