import { GlobalStyle } from '../GlobalStyled';
import { Statistics } from '../Statistics/Statistics';
import { Profile } from '../Profile/Profile';
import { FriendList } from '../Friends/FriendsList/FriendList';
import { Transaction } from 'components/Transaction/Transaction';

import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <Transaction items={transactions} />
      <GlobalStyle />
    </Container>
  );
};
