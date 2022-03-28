import ReactDOM from 'react-dom'; // react-dom에서 ReactDOM 객체를 임포트 한다.

import './index.css';
import App from './App'; // 하나인 파일은 .js를 입력하지 않는다.

ReactDOM.render(<App />, document.getElementById('root'));
// render 메서드가 객체를 가져온다.
// <App />: JSX 객체
