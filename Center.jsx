import React from 'react'

const Center = () => {
  return (
    <>
    <div className='box'>
       <b> <h1>Unlimited movies, shows,<br />
            <pre>      and more  </pre></h1>
            <h3 id='h31'>starts at 149.Cancel at any time .</h3>
      <br />
       <h3 id='h32'>Ready to watch ? Enter your email to create or restart your
         <br /><pre>                   membership.</pre></h3>
       </b>

    </div>
    <div className="but">
      <input   id='but1' type="Email"placeholder='Email address' />
      <button id='but'>Get Started 
        <i class="fa-solid fa-angle-right"></i>
      </button>
    </div>
    
    
    </>
  )
}

export default Center
