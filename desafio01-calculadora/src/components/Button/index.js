
import { ButtonContainer, ButtonSpecial } from './styles';

export const Button = ({label, onClick}) => {
    return (
      <ButtonContainer onClick={onClick} type="button">
       {label}
      </ButtonContainer>
    );
  }
  
export const ButtonS = ({label, onClick}) => {
    return (
      <ButtonSpecial onClick={onClick} type="button">
       {label}
      </ButtonSpecial>
    );
  }
  
