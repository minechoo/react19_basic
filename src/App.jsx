import "./app.css";

function App() {
  //파라미터로 인수값 전달이 필요없는 함수
  const handleClick1 = () => {
    alert("인수전달이 필요 없는 함수");
  };

  //파라미터로 인수값 전달이 필요한 함수
  const handleClick2 = (text) => {
    alert(text);
  };

  return (
    <>
      <h1>JSX요소에 이벤트 핸들러 연결</h1>

      <button onClick={handleClick1}>
        클릭시 인수 전달이 필요없는 함수 호출
      </button>

      {/* 아래와 같이 인수전달이 필요한 함수는 다시 상위 함수로 wrapping처리필요 */}
      <button onClick={() => handleClick2("텍스트")}>
        클릭시 인수 전달이 필요한 함수 호출
      </button>
    </>
  );
}
export default App;
