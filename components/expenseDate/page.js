import React from "react";
import styles from "../ExpenseDate/ExpenseDate.module.css";

export const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-IN", { month: "long" });
  const year = props.date.toLocaleString("en-IN", { day: "2-digit" });
  const day = props.date.getFullYear();
  return (
    <div className={styles.expenseDate}>
      <div className={styles.expenseDate__month}>{month}</div>
      <div className={styles.expenseDate__year}>{year}</div>
      <div className={styles.expenseDate__day}>{day}</div>
    </div>
  );
};
