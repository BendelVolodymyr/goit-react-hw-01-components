interface TransactionHistoryProps {
  items: { id: string; type: string; amount: string; currency: string }[];
}

const TransactionHistory: React.FC<TransactionHistoryProps> = ({ items }) => {
  const resultItems = items.map(({ id, type, amount, currency }) => (
    <tr key={id}>
      <td>{type.toUpperCase()}</td>
      <td>{amount.toUpperCase()}</td>
      <td>{currency.toUpperCase()}</td>
    </tr>
  ));

  return (
    <section className="transaction">
      <table className="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>{resultItems}</tbody>
      </table>
    </section>
  );
};

export default TransactionHistory;
