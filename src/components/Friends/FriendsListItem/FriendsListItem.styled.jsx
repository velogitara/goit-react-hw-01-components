import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 2px solid ${p => (p.isOnline ? '#1bb403' : '#bc2a28')};
  border-radius: 10px;
  margin-top: 5px;
  padding: 5px;
`;

export const Avatar = styled.img`
  padding: 5px;
`;

export const Name = styled.p`
  font-weight: bold;
  color: ${props => props.theme.colors.darkGrey};
`;
