import React from "react";

const Card = () =>{


  return (
    <div className='card'>
      <section className='card-sect'>

      </section>
      <footer className='card-foot'>
        <button className='previous'>Previous</button>
        <div className='ede'>
          <button className='ede-btn'>Edit</button>
          <button className='ede-btn delete'>Delete</button>
          <button className='ede-btn'>New</button>
        </div>
        <button className='next'>Next</button>
      </footer>
    </div>
  )
}

export default Card;