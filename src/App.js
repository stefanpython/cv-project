import "./App.css";
import General from "./components/General";
import Experience from "./components/Experience";
import Practice from "./components/Practice";

function App() {
  return (
    <div className="app--container">
      <img src="print.png" alt="print icon" />
      <h1 className="cv--title">Cv Application</h1>
      <br />

      <General />
      <Experience />
      <Practice />
    </div>
  );
}

export default App;
