import "./app.css";
import List from "./components/List";

function App() {
  const colors = ['red', 'green', 'blue']
  const hobbies = ['game', 'reading', 'music']

  return (
    <>
     <List arrData={colors} />
     <List arrData={hobbies} />
     <List />
    </>
  );
}
export default App;
