import React from 'react'
import { NavLink , Link } from 'react-router-dom/cjs/react-router-dom.min';

const Footer = () => {
  return (
    <div>
      <>
      <footer>
        <div className='footer'>
          <div className='names'>
            <div className='title'>Mohammed Husam Rk</div>
            <div className='content1'>A Frontend Focused Web Developer Building The Frontend Of Websites And Web Applications That Leads To The Success Of The Overall Product.</div>
          </div>
           <div className='link'>
            <div className='title'>Links</div>
            <ul>
              <li><Link to='./home'>HOME</Link></li>
              <li><Link to='./about'>ABOUT</Link></li>
              <li><Link to='./project'>PROJECTS</Link></li>
              <li><Link to='./contact'>CONTACT</Link></li>
              </ul>
            </div>
          <div className='social'>
            <div className='title'>Social</div>
            <ul>
              <li><a href='https://github.com/husam272'><i class="fa-brands fa-github"></i></a></li>
              <li><a href='https://www.linkedin.com/in/mohammed-husam-445040243'><i class="fa-brands fa-linkedin-in"></i></a></li>
              <li><a href='https://twitter.com/HusamRk'><i class="fa-brands fa-twitter"></i></a></li>
              <li><a href='https://www.instagram.com/husam_rk_/'><i class="fa-brands fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
      </footer>
      </>
    </div>
  )
}

export default Footer
