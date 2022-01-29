import './App.css';
import Card from "./Card";
import {useEffect, useState} from "react";
import data from './data.js';

function App() {
  const [card, setCard] = useState(false);
  const [users, setUsers] = useState([])
  const [count, setCount] = useState(0)
  const [input, setInput] = useState({
    id: undefined,
    name: {first: '', last: ''},
    city: '',
    country: '',
    employer: '',
    title: '',
    favoriteMovies: [
      '','',''
    ]
  })

  const handleClick=()=>{
    setCard(!card)
  }

  const getData = ()=>{
    setUsers(data)
  }

  useEffect(() =>{
    getData();
  },[])

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
      {card === true ?
        <Card
          input={input} setInput={setInput}
          handleClick={handleClick}
          count={count} setCount={setCount}
          users={users} setUsers={setUsers}/>
        : null}
    </div>
  );
}

export default App;
