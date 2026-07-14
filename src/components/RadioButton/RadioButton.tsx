// import styled-components
import styled from 'styled-components';

// import RadioButton props type
import { RadioButtonProps } from './RadioButton.types';

// styled wrapper with CSS
const StyledWrapper = styled.label<RadioButtonProps>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px;
  border-radius: 5px;
  background-color: ${(props) => (props.disabled ? '#cccccc' : props.backgroundColor || '#ffffff')};
  color: ${(props) => (props.disabled ? '#666666' : '#222222')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  @media (max-width: 600px) {
    width: 100%;
  }
`;

// RadioButton component
function RadioButton({
  label = 'Radio Button',
  backgroundColor = '#ffffff',
  disabled = false,
  checked = false,
}: RadioButtonProps) {
  return (
    <StyledWrapper
      data-testid="radio-wrapper"
      backgroundColor={backgroundColor}
      disabled={disabled}
    >
      <input type="radio" disabled={disabled} defaultChecked={checked} />
      {label}
    </StyledWrapper>
  );
}

// export RadioButton
export default RadioButton;
