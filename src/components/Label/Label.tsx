// import styled-components
import styled from 'styled-components';

// import Label props type
import { LabelProps } from './Label.types';

// styled label with CSS
const StyledLabel = styled.label<LabelProps>`
  display: inline-block;
  padding: 8px 12px;
  border-radius: 5px;
  background-color: ${(props) => (props.disabled ? '#cccccc' : props.backgroundColor || '#28a745')};
  color: ${(props) => (props.disabled ? '#666666' : '#ffffff')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  font-size: 16px;

  @media (max-width: 600px) {
    width: 100%;
    text-align: center;
  }
`;

// Label component
function Label({ text = 'Label', backgroundColor = '#28a745', disabled = false }: LabelProps) {
  return (
    <StyledLabel backgroundColor={backgroundColor} disabled={disabled}>
      {text}
    </StyledLabel>
  );
}

// export Label
export default Label;
