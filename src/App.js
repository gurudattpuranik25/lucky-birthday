import { useState } from "react";
import "./App.css";

function App() {
  const [dob, setDob] = useState("");
  const [luckyNumber, setLuckyNumber] = useState("");
  const [result, setResult] = useState("");

  const checkMyLuck = (dob, luckyNumber) => {
    if (
      dob === "" ||
      luckyNumber === "" ||
      luckyNumber < 0 ||
      luckyNumber === "0"
    )
      setResult("Please enter correct values in the fields.");
    else {
      const formattedDate = dob.replaceAll("-", "");
      let sum = 0;
      for (let i = 0; i < formattedDate.length; i++) {
        sum += parseInt(formattedDate.charAt(i));
      }
      if (sum % parseInt(luckyNumber) === 0)
        setResult("You are a lucky champ 🥳");
      else setResult("Oops...your birthday is not lucky 😢");
    }
  };

  return (
    <div className=" main">
      <div className="container">
        <header className=" heading ">Is your birthday lucky??</header>
        <div className=" input__block">
          <div className=" input__label">
            <label htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              id="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="input__style"
            />
          </div>
          <div className=" input__label">
            <label htmlFor="luckyNumber">Your lucky number</label>
            <input
              type="number"
              id="luckyNumber"
              value={luckyNumber}
              onChange={(e) => setLuckyNumber(e.target.value)}
              className="input__style"
            />
          </div>
        </div>
        <button className=" btn " onClick={() => checkMyLuck(dob, luckyNumber)}>
          Try Your Luck
        </button>
        <button className=" btn" onClick={() => window.location.reload()}>
          Reset
        </button>
        <p className=" result">{result}</p>
      </div>
      <div className="social__icons  ">
        <p className="footer">Copyright &copy; 2022 - Gurudatt Puranik</p>
        <a href="https://twitter.com/PuranikGurudatt">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="https://www.linkedin.com/in/gurudatt-puranik-0933b0195/">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/gurudatt_puranik/">
          <i className="fa-brands fa-square-instagram"></i>
        </a>
        <a href="https://github.com/gurudattpuranik25">
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
      <p className="responsiveFooter">
        Copyright &copy; 2022 - Gurudatt Puranik
      </p>
    </div>
  );
}

export default App;
