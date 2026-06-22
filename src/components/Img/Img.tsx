// import styled-components
import styled from 'styled-components';

// import Img props type
import { ImgProps } from './Img.types';

// styled image with CSS
const StyledImg = styled.img<ImgProps>`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  padding: 6px;
  background-color: ${(props) =>
    props.disabled ? '#cccccc' : props.backgroundColor || '#ffffff'};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};

  @media (max-width: 600px) {
    width: 100%;
  }
`;

// Img component
function Img({
  src = 'https://www.winnipegfreepress.com/wp-content/uploads/sites/2/2022/05/NEP11058272.jpg',
  alt = 'Sample image',
  backgroundColor = '#ffffff',
  disabled = false,
}: ImgProps) {
  return (
    <StyledImg
      src={src}
      alt={alt}
      backgroundColor={backgroundColor}
      disabled={disabled}
    />
  );
}

// export Img
export default Img;
