import React from 'react';
//, { useState }

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);
  // // onsole.log('ExpenseItem evaluated by React');
  // // props가 호출되는 방식에 유의하자

  // const clickHandler = () => {
  //   setTitle('Updated!');
  //   console.log(title);
  // };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      {/* 콘텐츠가 없는 컴포넌트가 있다면 스스로 닫아줘야한다 -> app.js도 마찬가지 */}
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{[props.amount]}만원</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
    // HTML처럼 보이기는 하지만 리액트가 만든 특별한 JSX 구문이다.
  );
};
// 하나의 return명령어당(하나의 JSX 코드당) 하나의 루트 요소만 가져올 수 있다.
// ✔️ 가장 간단한 방법
// 1. 하나의 <div></div>로 감싸준다.

export default ExpenseItem; // 해당 js 파일을 사용하려면 export 해주어야 한다
