// import styled-components
import styled from "styled-components";

// import Card props type
import { CardProps } from "./Card.types";

// styled card with CSS
const StyledCard = styled.div<CardProps>`
  max-width: 360px;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #dddddd;
  background-color: ${(props) =>
    props.disabled ? "#cccccc" : props.backgroundColor || "#ffffff"};
  color: ${(props) => (props.disabled ? "#666666" : "#222222")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
  box-shadow: ${(props) =>
    props.disabled ? "none" : "0 2px 8px rgba(0, 0, 0, 0.12)"};

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const CardTitle = styled.h3`
  margin-top: 0;
`;

const CardContent = styled.p`
  line-height: 1.5;
`;

// Card component
function Card({
  title = "Card Title",
  content = "This is a card component.",
  backgroundColor = "#ffffff",
  disabled = false,
}: CardProps) {
  return (
    <StyledCard
      data-testid="card"
      backgroundColor={backgroundColor}
      disabled={disabled}
    >
      <CardTitle>{title}</CardTitle>
      <CardContent>{content}</CardContent>
    </StyledCard>
  );
}

// export Card
export default Card;
