
import React from 'react'

const NavBar = () => {
  return (
    <div className='container'>
        <img  id='image' src="https://pngimg.com/uploads/netflix/netflix_PNG25.png" alt="netflix" />

    <select name="language" id="select">

        <option value="English">English</option>
        <option value="Hindi">Hindi</option>
    </select>  
        <button type='button'>Sign IN</button>    
    </div>
  )
}

export default NavBar
