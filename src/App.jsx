import "./app.css";
import Card from "./components/Card";
import ListComponent from "./components/ListComponent";
import movieData from './Data'

function App() {

  return (
    <>
      <ListComponent arrData={movieData} Component={Card}/>
    </>
  );
}
export default App;
