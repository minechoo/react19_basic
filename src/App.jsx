import { useRef } from 'react';
import './app.css';

function App() {
	const num = useRef(0);
	console.log(num);

	const minus = () => {
		num.current = num.current - 1;
		console.log(num);
	};
	const plus = () => {
		num.current = num.current + 1;
		console.log(num);
	};

	return (
		<>
			<h1>React hook</h1>
			<button onClick={minus}>-</button>
			<button onClick={plus}>+</button>
		</>
	);
}
export default App;
/*
  useRef : 화면 렌더링에 직접적으로 관여하지 않는 덜 중요한 데이터를 상태가 아닌 참조객체로 관리하기 위한 훅
  - 덜 중요한 데이터를 상태에 담으면 계속해서 재랜더링이 발생하기 때문에 비효율적
  - 그렇다고 일반변수에 담으면 컴포넌트가 재 호출될때마다 해당 값이 사라짐
  - useRef로 생성한 참조객체에 담아놓은 값은 컴포넌트가 재호출되더라도 값이 유지가됨
  - 값이 유지가되는것 뿐 해당 값이 변경되도 컴포넌트를 재랜더링 처리하진 않음

  useRef를 통한 참조객체를 활용하는 사례
  - 돔요소를 직접 선택하기 위해서 JSX요소를 참조
  - 화면 렌더링에 직접적인 관여를 하는 데이터는 아니지만 모션등 부가적인 로직처리를 위해 기억해야되는 값을 참조

  useRef 사용법
  const 참조객채명 = useRef(초기값) --> {current: 초기값}
*/
