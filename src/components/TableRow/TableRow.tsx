// import styled-components
import styled from 'styled-components';

// import TableRow props type
import { TableRowProps } from './TableRow.types';

// styled table row
const StyledRow = styled.tr<TableRowProps>`
  background-color: ${(props) => (props.disabled ? '#cccccc' : props.backgroundColor || '#ffffff')};
  color: ${(props) => (props.disabled ? '#666666' : '#222222')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const StyledCell = styled.td`
  padding: 10px;
  border: 1px solid #dddddd;
`;

// TableRow component
function TableRow({
  text = 'Table Row',
  backgroundColor = '#ffffff',
  disabled = false,
  children,
}: TableRowProps) {
  return (
    <table>
      <tbody>
        <StyledRow data-testid="table-row" backgroundColor={backgroundColor} disabled={disabled}>
          {children || <StyledCell>{text}</StyledCell>}
        </StyledRow>
      </tbody>
    </table>
  );
}

// export TableRow
export default TableRow;
