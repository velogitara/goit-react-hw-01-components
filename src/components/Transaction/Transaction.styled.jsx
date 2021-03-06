import styled from '@emotion/styled';

export const TableContainer = styled.table`
  box-sizing: content-box;
  width: 290px;
  /* padding: 20px; */
  text-align: center;
  margin-top: 20px;
  border: 1px solid ${props => props.theme.colors.blue};
  border-radius: 10px;
  background-color: ${props => props.theme.colors.aliceBlue};
`;

export const TableHeadTitle = styled.th`
  padding: 5px;
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  background-color: ${props => props.theme.colors.table};
`;

export const TableData = styled.td`
  padding: 5px;
  /* border-radius: 10px 0 0 10px; */
`;
