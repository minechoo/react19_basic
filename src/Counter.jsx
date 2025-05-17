import { useEffect, useState } from 'react';

export default function Counter() {
	console.log('컴포넌트 재호출');
	const [Num, setNum] = useState(0);

	//useEffect의 의존성 배열이 비어있을때의 콜백함수는 컴포넌트 마운트시 한번만 호출됨
	//해당 생명주기는 보통 소비비용이 높고 재호출될 필요가 없는 무거운 로직을 호출할때 주로 사용 (서버 데이터 호출)
	useEffect(() => {
		console.log('컴포넌트 마운트');
	}, []);

	//useEffect의 의존성 배열에 특정 상태값을 담아놓으면 해당 상태값이 변경시에만 콜백함수 호출
	//특정 상태값 변경시에만 처리해야되는 특정 로직을 해당 콜백안쪽에서 주로 사용 (서버 데이터 변경해서 업데이트 해야 될때)
	useEffect(() => {
		console.log('Num값 변경으로 인한 컴포넌트 업데이트');
	}, [Num]);

	//useEffect의 의존성 배열이 비어있을때 콜백함수가 또다른 함수를 반환처리 (클린업 함수)
	//클린업 함수는 컴포넌트가 언마운트시 호출됨 (컴포넌트 사라지면서 필요없는 정보 초기화할때, 전역변수 제거, 전역함수 제거)
	useEffect(() => {
		return () => {
			console.log('컴포넌트 언마운트');
		};
	});

	return (
		<div>
			<p>{Num}</p>
			<button onClick={() => setNum(Num - 1)}>-</button>
			<button onClick={() => setNum(Num + 1)}>+</button>
		</div>
	);
}
/*
  리액트에서의 생명주기 (life cycle for component)
  - 컴포넌트 호출 (Mount)
  - 컴포넌트 변경 (Update)
  - 컴포넌트 제거 (Unmount)

  리액트에서는 각 생명주기별로 특별한 로직을 수행해야 될때 
  해당 생명주기를 인식시킬 방법이 필요

  이때 필요한 훅 useEffect

  useEffect(()=>{

  },[])
  useEffect(콜백함수, 의존성배열)
*/
