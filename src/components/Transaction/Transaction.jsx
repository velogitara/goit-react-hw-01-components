import PropTypes from 'prop-types';
import { TableContainer, TableBody, TableRow } from './Transaction.styled';

export const Transaction = ({ items }) => {
  return (
    <TableContainer>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <TableBody>
        {items.map(item => (
          <TableRow key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
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
