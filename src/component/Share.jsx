import React from 'react';
import './shareStyle.css'

function Share() {
  return (
    <>
        <div className='social-buttons'>
          <div className="icon1">
          <a href='https://www.instagram.com/heyy.rishabh30/'>
        <i class="fa-brands fa-instagram" id='fav-icons'></i>
        <br></br><label id='social-subheading'>Instagram</label>
        </a>
        </div>
        <div className="icon2">
        <a href='https://www.linkedin.com/in/rishabh-gupta-944068294/'>
        <i class="fa-brands fa-linkedin-in" id='fav-icons'></i>
        <br></br><label id='social-subheading'>LinkedIn</label>
        </a>
        </div>
        <div className="icon3">
        <a href='https://github.com/MasterSINISTER/'>
        <i class="fa-brands fa-github-alt" id='fav-icons'></i>
        <br></br><label id='social-subheading'>Github</label>
        </a>
        </div>
        </div>
    </>
  )
}

export default Share
