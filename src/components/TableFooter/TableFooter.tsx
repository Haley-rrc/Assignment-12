// import styled-components
import styled from 'styled-components';

// import TableFooter props type
import { TableFooterProps } from './TableFooter.types';

// styled table footer cell
const StyledFooter = styled.td<TableFooterProps>`
  padding: 10px;
  border: 1px solid #dddddd;
  font-weight: bold;
  background-color: ${(props) => (props.disabled ? '#cccccc' : props.backgroundColor || '#f8f9fa')};
  color: ${(props) => (props.disabled ? '#666666' : '#222222')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};

  @media (max-width: 600px) {
    padding: 8px;
  }
`;

// TableFooter component
function TableFooter({
  text = 'Table Footer',
  backgroundColor = '#f8f9fa',
  disabled = false,
}: TableFooterProps) {
  return (
    <table>
      <tfoot>
        <tr>
          <StyledFooter backgroundColor={backgroundColor} disabled={disabled}>
            {text}
          </StyledFooter>
        </tr>
      </tfoot>
    </table>
  );
}

// export TableFooter
export default TableFooter;
