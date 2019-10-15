import React from 'react';
import PropTypes from 'prop-types';
import styles from './Balance.module.css';

const Balance = ({ income, expenses, balance }) => {
  return (
    <section className={styles.balance}>
      <span> ⬆ {income}$</span>
      <span>⬇ {expenses}$</span>
      <span> Balance {balance}: $</span>
    </section>
  );
};

Balance.propTypes = {
  income: PropTypes.number.isRequired,
  expenses: PropTypes.number.isRequired,
  balance: PropTypes.number.isRequired,
};

export default Balance;
