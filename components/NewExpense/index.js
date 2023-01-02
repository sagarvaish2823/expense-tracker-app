import React from "react";
import { ExpenseForm } from "../ExpenseForm";
import styles from "../NewExpense/NewExpense.module.css";
export const NewExpense = (props) => {

  const saveExpenseDateHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className={styles.newExpense}>
      <ExpenseForm onSaveExpenseDate={saveExpenseDateHandler} />
    </div>
  );
};
