// import styled-components
import styled from 'styled-components';

// import Table props type
import { TableProps } from './Table.types';

// styled table with CSS
const StyledTable = styled.table<TableProps>`
  width: 100%;
  border-collapse: collapse;
  background-color: ${(props) => (props.disabled ? '#cccccc' : props.backgroundColor || '#ffffff')};
  color: ${(props) => (props.disabled ? '#666666' : '#222222')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const StyledCaption = styled.caption`
  padding: 8px;
  font-weight: bold;
`;

// Table component
function Table({
  caption = 'Student Table',
  backgroundColor = '#ffffff',
  disabled = false,
  children,
}: TableProps) {
  return (
    <StyledTable backgroundColor={backgroundColor} disabled={disabled}>
      <StyledCaption>{caption}</StyledCaption>
      {children || (
        <tbody>
          <tr>
            <td>Sample Cell</td>
          </tr>
        </tbody>
      )}
    </StyledTable>
  );
}

// export Table
export default Table;
