const Table = ({ children }) => {
  return (
    <table className="table table-dark table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Price</th>
          <th>Reward</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default Table;
