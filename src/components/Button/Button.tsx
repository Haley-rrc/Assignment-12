import styled from 'styled-components';
// import styled-components for CSS
import { ButtonProps } from './Button.types';
//import button's porps


// create a button with style
const StyledButton = styled.button<ButtonProps>`
  padding: 12px 20px;
  border: none;
  border-radius: 6px;
  background-color: ${(props) =>
    props.disabled ? '#cccccc' : props.backgroundColor || '#007bff'};
  color: ${(props) => (props.disabled ? '#666666' : '#ffffff')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  font-size: 16px;
  width: fit-content;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

// crate a button funcation
function Button({
  label = 'Button',
  backgroundColor = '#007bff',
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
    >
      {label}
    </StyledButton>
  );
}

// export button for other files
export default Button;