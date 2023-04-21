import { forwardRef, useEffect, useState } from "react";
import * as S from "./styles";
import * as T from "./types";
import InputMask from "react-input-mask";
import { FiEye, FiEyeOff } from "react-icons/fi";

export const Input = forwardRef<HTMLInputElement, T.IInputProps>(
  (
    {
      label,
      icon: Icon,
      iconAction,
      iconAfter = false,
      iconSize,
      error,
      type,
      width,
      height,
      bgColor,
      borderColor,
      borderRadius,
      color,
      isMask = false,
      mask,
      ...rest
    },
    ref
  ) => {
    const [isPassword, setIsPassword] = useState<boolean>(false);

    useEffect(() => {
      type === "password" ? setIsPassword(true) : setIsPassword(false);
    }, [type]);

    return (
      <S.Container
        width={width}
        height={height}
        bgColor={bgColor}
        color={color}
      >
        {/* div responsável pela label e erros */}
        <div>
          {label} {!!error && <span> - {error}</span>}
        </div>
        {/* container do icone - input - olho do password */}
        <S.inputContainer
          borderColor={borderColor}
          borderRadius={borderRadius}
          color={color}
          iconSize={iconSize}
          iconAction={iconAction}
          isErrored={!!error}
        >
          {Icon && !iconAfter && <Icon onClick={iconAction} />}

          {isMask && mask ? (
            <InputMask type={type} mask={mask} {...rest} inputRef={ref} />
          ) : type === "password" ? (
            <>
              <input
                type={isPassword ? "password" : "text"}
                {...rest}
                ref={ref}
              />
              {isPassword ? (
                <FiEye
                  className="password_eye"
                  onClick={() => setIsPassword(!isPassword)}
                />
              ) : (
                <FiEyeOff
                  className="password_eye"
                  onClick={() => setIsPassword(!isPassword)}
                />
              )}
            </>
          ) : (
            <input type={type} {...rest} ref={ref} />
          )}

          {Icon && iconAfter && <Icon onClick={iconAction} />}
        </S.inputContainer>
      </S.Container>
    );
  }
);

// export const Input = forwardRef<HTMLInputElement, T.IInputProps>(
//   ({ width, label, error, type }, ref) => {
//     return (
//       <S.Container width={width}>
//         <div>
//           <span>
//             {label} {error && <span> - {error}</span>}
//           </span>
//         </div>
//         <input type={type} ref={ref} />
//       </S.Container>
//     );
//   }
// );
