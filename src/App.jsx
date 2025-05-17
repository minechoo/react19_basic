import { useState } from 'react';
import './app.css';

function App() {
	console.log('app re-render');
	//아래와 같이 실제 input요소에 변경점이 생길때마다 해당 변경사항을 state에 담아두고
	//해당 state값을 다시 화면에 재랜더링하며 출력 하는 방식
	//리액트가 실시간으로 사용자가 입력하는 값을 상태로 담아서 관리하기 때문에 데이터 추적이 쉬움
	//이런 방식의 컴포넌트를 제어컴포넌트라고 함
	const [Val, setVal] = useState('');
	const handleChange = (e) => {
		console.log(e.target.value);
		setVal(e.target.value);
	};

	return (
		<>
			<h1>React hook</h1>
			{/* State 값을 input 요소의 value값으로 등록 */}
			<input type='text' value={Val} onChange={handleChange} />
			<button>인풋값확인</button>
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
