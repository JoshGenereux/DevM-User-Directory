import './App.css';
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <header>
        <h2 className='header-h2'>Home</h2>
      </header>
      <button className='show-btn'>Show Users</button>
      <Card/>
    </div>
  );
}

export default App;
