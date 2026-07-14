// import styled-components
import styled from "styled-components";

// import TableCell props type
import { TableCellProps } from "./TableCell.types";

// styled table cell
const StyledCell = styled.td<TableCellProps>`
  padding: 10px;
  border: 1px solid #dddddd;
  background-color: ${(props) =>
    props.disabled ? "#cccccc" : props.backgroundColor || "#ffffff"};
  color: ${(props) => (props.disabled ? "#666666" : "#222222")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};

  @media (max-width: 600px) {
    padding: 8px;
  }
`;

// TableCell component
function TableCell({
  text = "Table Cell",
  backgroundColor = "#ffffff",
  disabled = false,
}: TableCellProps) {
  return (
    <table>
      <tbody>
        <tr>
          <StyledCell backgroundColor={backgroundColor} disabled={disabled}>
            {text}
          </StyledCell>
        </tr>
      </tbody>
    </table>
  );
}

// export TableCell
export default TableCell;
