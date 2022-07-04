import PropTypes from 'prop-types';
import {
  TableContainer,
  TableHeadTitle,
  TableBody,
  TableRow,
  TableData,
} from './Transaction.styled';

export const Transaction = ({ items }) => {
  return (
    <TableContainer>
      <thead>
        <tr>
          <TableHeadTitle>Type</TableHeadTitle>
          <TableHeadTitle>Amount</TableHeadTitle>
          <TableHeadTitle>Currency</TableHeadTitle>
        </tr>
      </thead>
      <TableBody>
        {items.map(item => (
          <TableRow key={item.id}>
            <TableData style={{ borderRadius: '10px 0 0 10px' }}>
              {item.type}
            </TableData>
            <TableData>{item.amount}</TableData>
            <TableData style={{ borderRadius: '0 10px 10px 0' }}>
              {item.currency}
            </TableData>
          </TableRow>
        ))}
      </TableBody>
    </TableContainer>
  );
};
Transaction.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
