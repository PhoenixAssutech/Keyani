import { useState } from "react";

import Header from "./components/Header";
import ExpenseList from "./components/ExpenseList";
import CreateExpense from "./components/CreateExpense";

import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [expenseList, setexpenseList] = useState([
    {
      id: 1,
      amount: 500,
      category: "23",
      description: "some",
    },
  ]);

  return (
    <>
      <Header />
      <CreateExpense
        submitHandler={(data) => {
          setexpenseList([
            ...expenseList,
            { ...data, id: expenseList.length + 1 },
          ]);
        }}
      />
      <ExpenseList
        expenseList={expenseList}
        onDelete={(id) =>
          setexpenseList([...expenseList.filter((e) => e.id !== id)])
        }
      />
    </>
  );
}

export default App;
