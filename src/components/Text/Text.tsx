// import styled-components
import styled from 'styled-components';

// import Text props type
import { TextProps } from './Text.types';

// styled text with CSS
const StyledText = styled.p<TextProps>`
  padding: 10px;
  border-radius: 5px;
  background-color: ${(props) => (props.disabled ? '#cccccc' : props.backgroundColor || '#ffffff')};
  color: ${(props) => (props.disabled ? '#666666' : '#222222')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  font-size: 16px;
  line-height: 1.5;
  max-width: 700px;

  @media (max-width: 600px) {
    font-size: 14px;
    width: 100%;
  }
`;

// Text component
function Text({
  text = 'This is a text component.',
  backgroundColor = '#ffffff',
  disabled = false,
}: TextProps) {
  return (
    <StyledText backgroundColor={backgroundColor} disabled={disabled}>
      {text}
    </StyledText>
  );
}

// export Text
export default Text;
