// import styled-components
import styled from 'styled-components';

// import HeroImage props type
import { HeroImageProps } from './HeroImage.types';

// styled hero section
const StyledHero = styled.section<HeroImageProps>`
  min-height: 260px;
  padding: 40px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.disabled ? '#cccccc' : props.backgroundColor || '#333333'};
  background-image: ${(props) =>
    props.disabled ? 'none' : `url(${props.imageUrl})`};
  background-size: cover;
  background-position: center;
  color: ${(props) => (props.disabled ? '#666666' : '#ffffff')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 600px) {
    min-height: 180px;
    padding: 20px;
  }
`;

const HeroTitle = styled.h1`
  margin: 0;
  font-size: 36px;

  @media (max-width: 600px) {
    font-size: 26px;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 18px;

  @media (max-width: 600px) {
    font-size: 15px;
  }
`;

// HeroImage component
function HeroImage({
  title = 'Hero Image',
  subtitle = 'This is a hero image component.',
  imageUrl = 'https://www.winnipegfreepress.com/wp-content/uploads/sites/2/2022/05/NEP11058272.jpg',
  backgroundColor = '#333333',
  disabled = false,
}: HeroImageProps) {
  return (
    <StyledHero
      data-testid="hero-image"
      imageUrl={imageUrl}
      backgroundColor={backgroundColor}
      disabled={disabled}
    >
      <HeroTitle>{title}</HeroTitle>
      <HeroSubtitle>{subtitle}</HeroSubtitle>
    </StyledHero>
  );
}

// export HeroImage
export default HeroImage;
