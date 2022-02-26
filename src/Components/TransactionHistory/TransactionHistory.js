import PropTypes from 'prop-types';
import Transaction from './TransactionItem'
import s from "./TransactionHistory.module.css";


export default function TransactionHistory({items}) {
    return (
        <table className={s.transactionHistory}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map((item) => (
                    <Transaction
                        key={item.id}
                        type={item.type}
                        amount={item.amount}
                        currency={item.currency}
                    />
                ))}
            </tbody>
        </table>
    );
}

TransactionHistory.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.number,
    currency: PropTypes.string,
};
