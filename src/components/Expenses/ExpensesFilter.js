import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>π₯ μ¬ν΄λ μ΄λ§νΌ μλΉνμ΅λλ€ π₯</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2022">2022λ</option>
          <option value="2021">2021λ</option>
          <option value="2020">2020λ</option>
          <option value="2019">2019λ</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
