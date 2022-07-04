import PropTypes from 'prop-types';
import {
  StatisticsContainer,
  Title,
  StatList,
  Item,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsContainer>
      {title ? <Title>{title}</Title> : null}
      <StatList>
        {stats.map(item => (
          <Item key={item.id} style={{ backgroundColor: getRandomHexColor() }}>
            <span>{item.label}</span>
            <span>{item.percentage}%</span>
          </Item>
        ))}
      </StatList>
    </StatisticsContainer>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
