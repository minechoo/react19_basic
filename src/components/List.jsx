export default function List({ arrData }) {
  if (!arrData)
    return console.error("해당 컴포넌트에는 배열데이터가 전달되어야 합니다.");

  return (
    <ul>
      {arrData.map((el, idx) => (
        <li key={idx}>{el}</li>
      ))}
    </ul>
  );
}


