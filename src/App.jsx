import { useRef } from 'react';
import './app.css';

function App() {
	const inputRef = useRef(null);

	return (
		<>
			<h1>React hook</h1>
			{/* 빈 참조객체를 언하는 돔요소에 연결결 */}
			<input type='text' ref={inputRef} />
			{/* 버튼을 클릭하기 전까지는 input요소의 값을 확인 불가능하고 해당 input에 변경되는 value값은 리액트가 관리하지 않음 - 비제어 컴포넌트 */}
			<button onClick={() => console.log(inputRef.current.value)}>인풋값확인</button>
		</>
	);
}
export default App;
/*
  리액트에서 폼 데이터를 관리하는 2가지 방법
  1. 비제어 컴포넌트
  : useRef로 폼 값을 담아놓고 필요할때마다 useRef에 있는 폼의 값을 직접 추출해서 활용하는 방법
  : 장점 - 일반 HTML, JS 개발하듯이 개발로직이 직관적
  : 단점 - 관리해야될 폼 데이터가 많아질수록 개발자가 일일이 수동으로 처리해야될 값도 많아짐 

  2. 제어 컴포넌트 (리액트에서는 해당 방식 추천)
  : 폼의 값 자체를 state에 담아둠
  : 장점 - 리액트가 실시간으로 폼의 데이터의 변경사항을 추적가능
  : 단점 - 개발로직이 비제어 컴포넌트 방식에 비해서는 구조가 복잡하고 컴포넌트의 재 랜더링을 많이 발생 시킴
*/
