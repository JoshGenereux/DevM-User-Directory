import './App.css';
import Card from "./Card";
import {useState} from "react";

function App() {
  const [card, setCard] = useState(false);

  const handleClick=()=>{
    setCard(!card)
  }

  return (
    <div className="App">
      <header>
        <button
          onClick={handleClick}
          className='header-h2'>Home</button>
      </header>
      <button
        onClick={handleClick}
        className='show-btn'>Show Users</button>
      {card === true ? <Card/> : null}
    </div>
  );
}

export default App;
