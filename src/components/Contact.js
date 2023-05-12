import React from 'react';
import contactgif from "../components/images/contact-gif.gif"
import { Input } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { NavLink , Link } from 'react-router-dom/cjs/react-router-dom.min';
import { LazyLoadImage } from "react-lazy-load-image-component";
import Footer from './Footer';


const Contact = () => {
  return (
    <div>
      <section className='contact' id='contact'>
        <div className='header1'>
          <div className='backarrow'><NavLink to="/"><ArrowBackIcon /><span></span></NavLink>
          </div>

          <div className='contact-title'>CONTACT ME</div>

        </div>
        <div className='contact-container'>
          <div className='Contact-section'>
            <div className='gif'>
              <div>
                {/* <img src={contactgif} /> */}
                <LazyLoadImage className="card-img-top " src={contactgif}
                                            alt="Image Alt"
                                        />
              </div>
            </div>
          </div>
          <div className='contact-form'>
            <form>
              <div className='input1'>
                <div className='inputname'>NAME</div>
                <input type='text' placeholder='Name' />
              </div>
              <div className='input1'>
                <div className='inputname'>NUMBER</div>
                <input type='number' placeholder='Number' />
              </div>
              <div className='input1'>
                <div className='inputname'>EMAIL</div>
                <input type='text' placeholder='Email' />
              </div>
              <div className='input1'>
                <div className='inputname'>MESSAGE</div>
                <textarea className='textarea' placeholder='Message'></textarea>
              </div>
              <div className='sendbtn'>
                <button>
                  <span>Button</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer/>

    </div>
  )
}

export default Contact;
