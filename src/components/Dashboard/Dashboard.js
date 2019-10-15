import React, { Component } from 'react';
import shortId from 'shortid';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Dashboard.module.css';
import Controls from '../Controls/Controls';
import Balance from '../Balance/Balance';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

toast.configure({
  autoClose: 3500,
  draggable: false,
});

export default class Dashboard extends Component {
  state = {
    transactions: [],
    balance: 0,
    income: 0,
    expenses: 0,
  };

  componentDidMount() {
    const preTransactions = localStorage.getItem('transactions');
    if (preTransactions) {
      this.setState({ transactions: JSON.parse(preTransactions) }, () =>
        this.updateState(),
      );
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { transactions } = this.state;
    if (prevState !== transactions) {
      localStorage.setItem('transactions', JSON.stringify(transactions));
    }
  }

  onDeposit = amount => {
    if (amount === '' || Number(amount) <= 0) {
      this.errorInput('input zerro');
    } else {
      this.addTransaction(amount, 'deposit');
    }
  };

  onWithdraw = amount => {
    if (amount === '' || Number(amount) <= 0) {
      this.errorInput('input zerro');
    } else if (amount > this.state.balance) {
      this.errorInput('no balanse');
    } else {
      this.addTransaction(amount, 'withdrawal');
    }
  };

  addTransaction = (amount, typeTransaction) => {
    const newTransaction = {
      id: shortId.generate(),
      type: typeTransaction,
      amount: Number(amount),
      date: this.newDate(),
    };
    this.setState(
      state => ({
        transactions: [...state.transactions, newTransaction],
      }),
      () => this.updateState(),
    );
  };

  updateState = () => {
    const { transactions } = this.state;
    let income = 0;
    let expenses = 0;

    transactions.forEach(transaction => {
      if (transaction.type === 'deposit') {
        income += transaction.amount;
      } else {
        expenses += transaction.amount;
      }
    });
    this.setState({
      balance: income - expenses,
      income,
      expenses,
    });
  };

  errorInput = infoError => {
    if (infoError === 'input zerro') {
      toast.error('Введите сумму для проведения операции !', {
        position: toast.POSITION.TOP_LEFT,
      });
    }
    if (infoError === 'no balanse') {
      toast.error('На счету недостаточно средств для проведения операции!', {
        position: toast.POSITION.TOP_LEFT,
      });
    }
  };

  newDate = () => {
    const date = new Date();
    return date.toLocaleString();
  };

  render() {
    const { balance, income, expenses, transactions } = this.state;
    return (
      <div className={styles.dashboard}>
        <Controls onDeposit={this.onDeposit} onWithdraw={this.onWithdraw} />
        <Balance balance={balance} income={income} expenses={expenses} />
        <TransactionHistory items={transactions} />
      </div>
    );
  }
}
