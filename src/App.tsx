import { useState } from "react";

import Header from "./components/Header";
import ExpenseList from "./components/ExpenseList";
import CreateExpense from "./components/CreateExpense";

import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [expenseList, setExpenseList] = useState([
    {
      id: 1,
      amount: 500,
      category: "Food",
      description: "Pizza at Pizza Hut Saturday",
    },
  ]);

  const listToReturn = () => {
    if (selectedCategory === "All") {
      return expenseList;
    }

    return expenseList.filter((e) => e.category === selectedCategory);
  };
  return (
    <>
      <Header />
      <CreateExpense
        submitHandler={(data) => {
          setExpenseList([
            ...expenseList,
            { ...data, id: expenseList.length + 1 },
          ]);
        }}
      />
      <ExpenseList
        setSelectedCategory={setSelectedCategory}
        expenseList={listToReturn()}
        onDelete={(id) =>
          setExpenseList([...expenseList.filter((e) => e.id !== id)])
        }
      />
    </>
  );
}

export default App;
