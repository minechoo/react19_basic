import { useState } from 'react';
import './app.css';

function App() {
	console.log('re-render');
	// useState사용법 숙지
	// [상태값, 상태변경함수] = useState(초기값);
	// 리액트안에서는 중요한 데이터는 무조건 상태에 담아둠
	// 상태에 담긴 값은 무조건 상태변경함수를 통해서만 수정
	// 상태변경함수에 의해서 상태변경이 일어나면 리액트는 컴포넌트를 다시 랜더링하면 변경된 상태값을 화면에 반영
	const [Num, setNum] = useState(0);

	// const minus = (num) => {
	// 	num - 1;
	// 	console.log(num);
	// 	return num;
	// };
	// const plus = (num) => {
	// 	num + 1;
	// 	console.log(num);
	// 	return num;
	// };
	return (
		<>
			<h1>React hook</h1>
			<p>{Num}</p>
			<button onClick={setNum(Num - 1)}>-</button>
			<button onClick={setNum(Num + 1)}>+</button>
		</>
	);
}
export default App;
/*
  리액트 훅 : 리액트 컴포넌트 전용으로 쓰이는 기능함수 (상태값 관리, 생명주기 관리, 참조객체 관리)
  리액트 컴포넌트 안쪽에서 자주 사용하는 기능을 고차함수 형태로 미리 정의한 기능 모음
  고차함수 (hof : high order function) :  함수에 콜백형태로 인수로 전달되거나 또다른 함수를 반환하는 함수

  훅의 특징
  1. use라는 접두사로 시작하는 함수
  2. 호출 컴포넌트 안쪽에서만 호출 가능
  3. 반환값이 있음
  4. 일반 핸들러함수 안쪽에서 호출 불가

  
  useState사용법 (리액트에서 제일 중요도가 높은 훅)
  const [상태값, 상태변경함수] = useState(상태에 담을 초기값);

  상태 : 리액트에서 기억하면서 화면 렌더링에 활용되는 중요값 정보값
  상태 값이 변경되면 리액트는 변경된 상태값을 인식해서 화면을 다시 렌더링

  상태를 통해서만 화면을 렌더링하면 데이터 추적이 편함
  - 개발자는 중요한 데이터를 useState를 통해서 상태에 잘 담아두고 변경로직만 설정해두면 나머지는 리액트가 알아서 자동화처리
*/
