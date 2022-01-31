import React, {useEffect, useState} from "react";

const New = ({input, setInput, users, setUsers, setNewCard})=>{

  const [movie1, setMovie1] = useState('')
  const [movie2, setMovie2] = useState('')
  const [movie3, setMovie3] = useState('')

  const onSubmit=(e)=>{
    e.preventDefault();
    let inp = {...input}
    setUsers([...users, {...inp, favoriteMovies: [movie1, movie2, movie3]}])
    setNewCard(false)
  }

  useEffect(()=>{
    setInput({
      id: users.length +1
    })
  },[setUsers])

  const handleFirst=(e)=> {
    setInput({...input, name: {
        ...input.name, first: e.target.value
      }})
  }
  const handleLast =(e)=>{
    setInput({...input, name: {
      ...input.name, last: e.target.value
    }})
  }
  const handleCity = (e)=>{
    setInput({...input, city: e.target.value})
  }
  const handleCountry = (e) =>{
    setInput({...input, country: e.target.value})
  }
  const handleTitle = (e) =>{
    setInput({...input, title: e.target.value})
  }
  const handleEmployer = (e) =>{
    setInput({...input, employer: e.target.value})
  }
  const handleMovie1 = (e) =>{
    let userMovie = e.target.value
    setMovie1(userMovie);
  }
  const handleMovie2 = (e) =>{
    let userMovie = e.target.value
    setMovie2(userMovie)
  }
  const handleMovie3 = (e) =>{
    let userMovie = e.target.value
    setMovie3(userMovie)
  }

  return(
    <div className='input-card'>
      <form>
        <div className='input-name'>
          <input
            onChange={handleFirst}
            name='first'
            type='text'
            placeholder='first name'/>
          <input
            onChange={handleLast}
            name='last'
            type='text'
            placeholder='last name'/>
        </div>
        <div className='input-city'>
          <label>From:</label>
            <input
              onChange={handleCity}
              type='text'
              placeholder='city'/>
            <input
              onChange={handleCountry}
              type='text'
              placeholder='country'/>
        </div>
        <div className='input-job'>
          <label>Job Title:</label>
          <input
            onChange={handleTitle}
            type='text'
            placeholder='Job Title'/>
        </div>
        <div className='input-emp'>
          <label>Employer:</label>
          <input
            onChange={handleEmployer}
            type='text'
            placeholder='Employer'/>
        </div>
        <div className='input-movie'>
          <label>Favorite Movies:</label>
          <input onChange={handleMovie1} className='movie-input' type='text' placeholder='first movie'/>
          <input onChange={handleMovie2} className='movie-input' type='text' placeholder='second movie'/>
          <input onChange={handleMovie3} className='movie-input' type='text' placeholder='third movie'/>
        </div>
        <button onClick={onSubmit} className='submit' type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default New;