import "./App.css";
import General from "./components/General";
import Experience from "./components/Experience";
import Practice from "./components/Practice";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import logo from "./print.png";

function App() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="app--container">
      <section ref={componentRef}>
        <img
          className="printPageButton"
          onClick={handlePrint}
          src={logo}
          alt="print icon"
        />

        <h1 className="cv--title">Cv Application</h1>
        <br />

        <General />
        <Experience />
        <Practice />
      </section>
    </div>
  );
}

export default App;
