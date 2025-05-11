export default function ListComponent({ arrData, Component }) {
  console.log(arrData);
  console.log(Component);

  return (
    <>
      {arrData.map((el, idx) => (
        // el = {id, name, age} 객체로 구성되어 있음
        // 객체값을 바로 전개연산자로 Card 컴포넌트에 한꺼번에 전달
        // Component 파라미터에는 실제 Card 컴포넌트 정의 함수가 전달됨
        // <Component /> -> <Card /> 형태로 내부적으로 호출됨
        <Component key={idx} {...el} />
      ))}
    </>
  );
}

/*
  더욱 범용적인 재사용성을 위해 props로 반복출력할 컴포넌트까지 전달하는 리스트 컴포넌트

  JSX에서 컴포넌트 함수 호출 로직
  - jsx를 반환하는 컴포넌트 함수 정의
  - <함수이름 /> 형식으로 호출 가능
  - 함수이름으로 컴포넌트 호출시에는 무조건 대문자로 시작해야됨 (문법적 강제사항)
*/