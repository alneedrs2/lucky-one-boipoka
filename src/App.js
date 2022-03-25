import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header/Header";
import AllBooks from "./AllBooks/AllBooks";
import QA from "./Q&A/Q&A";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <AllBooks></AllBooks>
      <QA></QA>
    </div>
  );
}

export default App;
