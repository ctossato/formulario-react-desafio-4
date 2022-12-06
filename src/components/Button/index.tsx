import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, isValid=false }: IButtonProps) => {
  console.log(isValid);
  return <ButtonContainer onClick={onClick} disabled={!isValid}>{title}</ButtonContainer>;
};

export default Button;
