import React, { Fragment } from "react";
import { ExpenseDate } from "../ExpenseDate";
import styles from "./ExpenseItem.module.css";

export const ExpenseItem = (props) => {
  return (
    <Fragment>
      <div className={styles.expenseItem}>
        <ExpenseDate date={props.date} />
        <div className={styles.expenseItem__description}>
          <h2>{props.title}</h2>
          <div className={styles.expenseItem__price}>₹{props.amount}</div>
        </div>
      </div>
    </Fragment>
  );
};
