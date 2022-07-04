import PropTypes from 'prop-types';
import {
  Container,
  UserImg,
  Description,
  UserName,
  UserProperties,
  Stats,
  StatsItem,
  StatLabel,
  StatQuantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Container>
      <Description>
        <UserImg src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserProperties>@{tag}</UserProperties>
        <UserProperties>{location}</UserProperties>
      </Description>

      <Stats>
        <StatsItem>
          <StatLabel>Followers</StatLabel>
          <StatQuantity>{stats.followers}</StatQuantity>
        </StatsItem>
        <StatsItem>
          <StatLabel>Views</StatLabel>
          <StatQuantity>{stats.views}</StatQuantity>
        </StatsItem>
        <StatsItem>
          <StatLabel>Likes</StatLabel>
          <StatQuantity>{stats.likes}</StatQuantity>
        </StatsItem>
      </Stats>
    </Container>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
