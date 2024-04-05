type Expense = {
  id: number;
  amount: number;
  category: string;
  description: string;
};

type ExpenseListProps = {
  expenseList: Expense[];
  onDelete: (id: number) => void;
};

const ExpenseList = (props: ExpenseListProps) => {
  const { expenseList, onDelete } = props;

  if (expenseList.length === 0) {
    return (
      <>
        <div className="text-center">
          <p className="text-primary m-4"> No Expense Added Yet!</p>
        </div>
      </>
    );
  }

  return (
    <table className="table table-striped-columns">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Action </th>
        </tr>
      </thead>
      <tbody>
        {expenseList.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.description}</td>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                type="button"
                onClick={() => onDelete(expense.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
        <tr></tr>
      </tbody>
      <tfoot>
        <tr>
          <td>Total: </td>
          <td>
            ${expenseList.reduce((total, expense) => total + expense.amount, 0)}
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
