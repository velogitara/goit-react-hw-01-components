import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  width: 250px;
  padding: 20px;
  border: 1px solid #004d80;
  border-radius: 5%;
  background-color: ${props => props.theme.colors.aliceBlue};
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserImg = styled.img`
  display: block;
  width: 100px;
  border-radius: 5%;

  background-color: ${props => props.theme.colors.white};
`;

export const UserName = styled.p`
  margin-top: 5px;
  color: ${props => props.theme.colors.aliceblue};
  font-weight: bold;
`;
export const UserProperties = styled.p`
  color: ${props => props.theme.colors.darkGreen};
`;
export const Stats = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: ${props => props.theme.colors.darkGrey};
  overflow: hidden;
  border-radius: 10px;
  border: 1px solid white;
  margin-top: 5px;
`;
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => props.theme.colors.aliceBlue};
  width: 100%;
  padding: 5px;
`;
export const StatLabel = styled.span`
  color: ${props => props.theme.colors.grey};
`;

export const StatQuantity = styled.span``;
