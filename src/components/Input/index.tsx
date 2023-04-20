import { forwardRef } from "react";
import * as S from "./styles";
import * as T from "./types";

export const Input = forwardRef<HTMLInputElement, T.IInputProps>(
  ({ width, label, error, type }, ref) => {
    return (
      <S.Container width={width}>
        <div>
          <span>
            {label} {error && <span> - {error}</span>}
          </span>
        </div>
        <input type={type} ref={ref} />
      </S.Container>
    );
  }
);
