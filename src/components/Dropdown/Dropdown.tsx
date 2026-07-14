// import styled-components
import styled from "styled-components";

// import Dropdown props type
import { DropdownProps } from "./Dropdown.types";

// styled select with CSS
const StyledDropdown = styled.select<DropdownProps>`
  padding: 10px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  background-color: ${(props) =>
    props.disabled ? "#cccccc" : props.backgroundColor || "#ffffff"};
  color: ${(props) => (props.disabled ? "#666666" : "#222222")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  font-size: 16px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

// Dropdown component
function Dropdown({
  optionOne = "Option One",
  optionTwo = "Option Two",
  backgroundColor = "#ffffff",
  disabled = false,
}: DropdownProps) {
  return (
    <StyledDropdown backgroundColor={backgroundColor} disabled={disabled}>
      <option>{optionOne}</option>
      <option>{optionTwo}</option>
    </StyledDropdown>
  );
}

// export Dropdown
export default Dropdown;
