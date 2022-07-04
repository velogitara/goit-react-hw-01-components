import styled from '@emotion/styled';

export const StatisticsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  width: 250px;
  padding: 20px;
  border: 1px solid #004d80;
  border-radius: 10px;
  margin-top: 20px;
  background-color: ${props => props.theme.colors.aliceBlue};
`;

export const Title = styled.h2`
  background-color: ${props => props.theme.colors.aliceBlue};
`;
export const StatList = styled.ul`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  min-width: 40px;
`;
