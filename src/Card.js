import React from "react";
import User from './User';

const Card = ({users, setUsers, count, setCount, handleClick}) =>{

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
    console.log(`count = ${count}`)
    console.log(`users.length = ${users.length}`)
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

  return (
    <div className='card'>
      <section className='card-sect'>
        <User
          count={count} setCount={setCount}
          users={users} setUser={setUsers}/>
      </section>
      <footer className='card-foot'>
        <button
          onClick={handlePrev}
          className='previous'>&#60; Previous</button>
        <div className='ede'>
          <button className='ede-btn'>Edit</button>
          <button
            onClick={handleDelete}
            className='ede-btn delete'>Delete</button>
          <button className='ede-btn'>New</button>
        </div>
        <button
          onClick={handleNext}
          className='next'>Next &#62;</button>
      </footer>
    </div>
  )
}

export default Card;