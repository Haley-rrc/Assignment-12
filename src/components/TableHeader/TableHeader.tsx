// import styled-components
import styled from 'styled-components';

// import TableHeader props type
import { TableHeaderProps } from './TableHeader.types';

// styled table header cell
const StyledHeader = styled.th<TableHeaderProps>`
  padding: 12px;
  border: 1px solid #dddddd;
  background-color: ${(props) =>
    props.disabled ? '#cccccc' : props.backgroundColor || '#343a40'};
  color: ${(props) => (props.disabled ? '#666666' : '#ffffff')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  text-align: left;

  @media (max-width: 600px) {
    padding: 8px;
  }
`;

// TableHeader component
function TableHeader({
  text = 'Header',
  backgroundColor = '#343a40',
  disabled = false,
}: TableHeaderProps) {
  return (
    <table>
      <thead>
        <tr>
          <StyledHeader backgroundColor={backgroundColor} disabled={disabled}>
            {text}
          </StyledHeader>
        </tr>
      </thead>
    </table>
  );
}

// export TableHeader
export default TableHeader;
