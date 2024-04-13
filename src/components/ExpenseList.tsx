import categories from "../constant";

type Expense = {
  id: number;
  amount: number;
  category: string;
  description: string;
};

type ExpenseListProps = {
  expenseList: Expense[];
  onDelete: (id: number) => void;
  setSelectedCategory: (category: string) => void;
};

const ExpenseList = (props: ExpenseListProps) => {
  const { expenseList, onDelete, setSelectedCategory } = props;

  if (expenseList.length === 0) {
    return (
      <>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Categories
          </label>
          <select
            id="category"
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="form-select"
          >
            <option value="All">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="text-center">
          <p className="text-primary m-4"> No Expense Added Yet!</p>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Categories
        </label>
        <select
          id="category"
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="form-select"
        >
          <option value="All">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
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
              $
              {expenseList.reduce(
                (total, expense) => total + expense.amount,
                0
              )}
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default ExpenseList;
