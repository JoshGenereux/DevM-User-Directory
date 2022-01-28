import React from "react";


const User = ({users, count}) =>{

  if(users.length < 1){
    return <h1 className='.sorry'>Sorry No Users</h1>
  }

  return(
    <div className='user-container'>
      <h1 className='number'>{count +1}/{users.length}</h1>
      <h1 className='user-h1'>{users[count].name.first} {users[count].name.last}</h1>
      <ul className='user-info-list'>
        <li className='user-info-li'>
          <p className='user-info-about'>From:</p>
          <p className='user-info'>{users[count].city}, {users[count].country}</p>
        </li>
        <li className='user-info-li'>
          <p className='user-info-about'>Job Title:</p>
          <p className='user-info'>{users[count].title}</p>
        </li>
        <li className='user-info-li'>
          <p className='user-info-about'>Employer:</p>
          <p className='user-info'>{users[count].employer}</p>
        </li>
      </ul>
      <p className='movie'>Favorite Movies:</p>
      <ol className='movie-list'>
        <li className='movie-title'>{users[count].favoriteMovies[0]}</li>
        <li className='movie-title'>{users[count].favoriteMovies[1]}</li>
        <li className='movie-title'>{users[count].favoriteMovies[2]}</li>
      </ol>
    </div>
  )
}

export default User;