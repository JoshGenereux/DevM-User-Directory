import React, {useState} from "react";
import User from './User';
import New from "./New";

const Card = ({users, setUsers, count, setCount, handleClick, input, setInput}) =>{

  const [newCard, setNewCard] = useState(false)

  const handleNext= ()=>{
    if(count < users.length -1){
      setCount(++count)
    }
  }

  const handlePrev=()=>{
    if(count > 0){
      setCount(--count);
    }
  }

  const handleDelete=()=> {
    if (users.length > 1 && count < users.length-1) {
      let array = [...users]
      array.splice(count, 1)
      setUsers([...array])
    }
    if(users.length === 1){
      handleClick();
      setUsers([])
    }
  }

  const handleNew = () =>{
    setNewCard(!newCard)
  }

  return (
    <div className='card'>
      {newCard === true ?
        <New
          users={users} setUsers={setUsers}
          input={input} setInput={setInput}
        />
        : <section className='card-sect'>
          <User
            count={count} setCount={setCount}
            users={users} setUser={setUsers}/>
        </section> }

        <footer className='card-foot'>
        <button
          onClick={handlePrev}
          className='previous'>&#60; Previous</button>
        <div className='ede'>
        <button
          className='ede-btn'>Edit</button>
        <button
          onClick={handleDelete}
          className='ede-btn delete'>Delete</button>
        <button
          onClick={handleNew}
          className='ede-btn'>New</button>
        </div>
        <button
          onClick={handleNext}
          className='next'>Next &#62;</button>
        </footer>
    </div>
  )
}

export default Card;