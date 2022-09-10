import { useState } from "react";
import "./App.css";

function App() {
  const [dob, setDob] = useState("");
  const [luckyNumber, setLuckyNumber] = useState("");
  const [result, setResult] = useState("");

  const checkMyLuck = (dob, luckyNumber) => {
    if (dob === "" || luckyNumber === "") alert("Please enter all the fields.");
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
    <div className=" main flex justify-center flex-col gap-5 items-center">
      <div className="container w-[24rem] gap-8 rounded-lg p-5 flex flex-col justify-center items-center">
        <header className=" text-2xl font-semibold">
          Is your birthday lucky??
        </header>
        <div className=" flex flex-col w-[90%] gap-5 ">
          <div className=" flex flex-col">
            <label htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              id="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className=" p-2 rounded-lg"
            />
          </div>
          <div className=" flex flex-col">
            <label htmlFor="luckyNumber">Your lucky number</label>
            <input
              type="number"
              id="luckyNumber"
              value={luckyNumber}
              onChange={(e) => setLuckyNumber(e.target.value)}
              className=" p-2 rounded-lg"
            />
          </div>
        </div>
        <button
          className=" border-2 border-white px-3 py-1 rounded-lg hover:text-white transition-all ease-in-out duration-150 hover:border-gray-500"
          onClick={() => checkMyLuck(dob, luckyNumber)}
        >
          Try Your Luck
        </button>
        <button
          className=" border-2 border-white px-3 py-1 rounded-lg hover:text-white transition-all ease-in-out duration-150 hover:border-gray-500"
          onClick={() => window.location.reload()}
        >
          Reset
        </button>
        <p className=" text-center text-xl">{result}</p>
      </div>
      <div className="social-icons flex items-center justify-center gap-5 text-2xl ">
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
