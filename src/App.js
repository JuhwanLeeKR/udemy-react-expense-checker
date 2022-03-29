import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: '휴가비용',
    amount: 94,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: '그래픽 카드', amount: 218, date: new Date(2021, 11, 29) },
  {
    id: 'e3',
    title: '4K 모니터',
    amount: 56,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: '유럽여행 경비',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e8',
    title: '항해99',
    amount: 400,
    date: new Date(2022, 1, 20),
  },
  {
    id: 'e6',
    title: '헬스 기구',
    amount: 32,
    date: new Date(2022, 1, 12),
  },
  {
    id: 'e7',
    title: '휴대폰 변경',
    amount: 103,
    date: new Date(2022, 1, 9),
  },

  {
    id: 'e5',
    title: '신발',
    amount: 90,
    date: new Date(2022, 0, 15),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  // ✔️ javascript 방식 = 명령형 접근법
  // const para = document.createElement('p')
  // para.textContext = 'This is also visible';
  // document.getElementById('root').append(para);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
      {/* <p>This is also visible!</p>  //react방식 */}
    </div>
  );
};

export default App;

// 이코테 해쉬 스택 큐 정렬 완전탐색 bfs dfs greedy
