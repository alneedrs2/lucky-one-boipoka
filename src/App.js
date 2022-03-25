import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header/Header";
import AllBooks from "./AllBooks/AllBooks";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <AllBooks></AllBooks>
    </div>
  );
}

export default App;
