import { useState } from "react";

import Header from "./components/Header";
import ExpenseList from "./components/ExpenseList";
import CreateExpense from "./components/CreateExpense";

import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [expenseList, setexpenseList] = useState([
    {
      id: 1,
      amount: 500,
      category: "Food",
      description: "some",
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
          setexpenseList([
            ...expenseList,
            { ...data, id: expenseList.length + 1 },
          ]);
        }}
      />
      <ExpenseList
        setSelectedCategory={setSelectedCategory}
        expenseList={listToReturn()}
        onDelete={(id) =>
          setexpenseList([...expenseList.filter((e) => e.id !== id)])
        }
      />
    </>
  );
}

export default App;
