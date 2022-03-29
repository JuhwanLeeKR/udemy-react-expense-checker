import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>🔥 올해는 이만큼 소비했습니다 🔥</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2022">2022년</option>
          <option value="2021">2021년</option>
          <option value="2020">2020년</option>
          <option value="2019">2019년</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
