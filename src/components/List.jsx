//비구조할당으로 props 전달시 아래와같이 default 설정가능
export default function List({ arrData =[1,2,3] }) {
  // if (!arrData)
  //   return console.error("해당 컴포넌트에는 배열데이터가 전달되어야 합니다.");

  return (
    <ul>
      {arrData.map((el, idx) => (
        <li key={idx}>{el}</li>
      ))}
    </ul>
  );
}


