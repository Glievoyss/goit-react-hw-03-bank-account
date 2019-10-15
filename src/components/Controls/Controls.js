import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

export default class Controls extends Component {
  static defaultProps = {};

  state = {
    value: '',
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  reset = () => {
    this.setState({ value: '' });
  };

  render() {
    const { onDeposit, onWithdraw } = this.props;
    const { value } = this.state;
    return (
      <section className={styles.controls}>
        <input
          type="number"
          name="amount"
          value={value}
          onChange={this.handleChange}
        />
        <button
          type="button"
          onClick={() => {
            onDeposit(value);
            this.reset();
          }}
        >
          Deposit
        </button>
        <button
          type="button"
          onClick={() => {
            onWithdraw(value);
            this.reset();
          }}
        >
          Withdraw
        </button>
      </section>
    );
  }
}

Controls.propTypes = {
  onDeposit: PropTypes.func.isRequired,
  onWithdraw: PropTypes.func.isRequired,
};
