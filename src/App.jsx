import "./app.css";
import Btn from "./components/Btn";

function App() {
  const handleLogin=()=>{
    alert('로그인되었습니다')
  }

  const handleLogout=()=>{
    alert('로그아웃되었습니다')
  }

  return (
    <>
      <h1>컴포넌트 재사용 방법</h1>
      <Btn label={'로그인'} handelClick={handleLogin}/>
      <Btn label={'로그아웃'} handelClick={handleLogout}/>
      <Btn />
    </>
  );
}
export default App;
