import React from "react";
import User from './User';

const Card = ({users, setUsers, count, setCount}) =>{

  const handleNext= ()=>{
    if(count < 25){
      setCount(count++)
    }
  }

  const handlePrev=()=>{
    console.log('prev')
    console.log(count)
    if(count >= 0){
      setCount(count--);
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
          <button className='ede-btn delete'>Delete</button>
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