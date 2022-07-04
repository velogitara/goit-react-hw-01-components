import PropTypes from 'prop-types';
import { Item, Avatar, Name } from './FriendsListItem.styled';

export const FriendListItem = ({ friend }) => {
  return (
    <Item isOnline={friend.isOnline}>
      <Avatar src={friend.avatar} alt={friend.name} width="48" />
      <Name>{friend.name}</Name>
    </Item>
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ),
};
