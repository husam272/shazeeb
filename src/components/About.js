import React from 'react';
import Aboutgif from "./images/about gif.webp";
import pdf from "./Mohammed shazeeb.pdf";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from '@mui/material';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { LazyLoadImage } from "react-lazy-load-image-component";

const About = () => {
  return (
    <>
      <section className='about' id='about'>

        <div className='header1'>
          <div className='backarrow'><NavLink to="/"><ArrowBackIcon/><span></span></NavLink>
          </div>

          <div className='title'>ABOUT ME</div>

        </div>





        <div className='about-container'>
          <div className='about-section'>

            <div className='gif'>
              {/* <img src={Aboutgif} /> */}
              <LazyLoadImage className="card-img-top " src={Aboutgif}
                                            alt="Image Alt"
                                        />
            </div>
            <div className='skills'>
              <div className='skill-title'>skills</div>
              <div className='skills1'>
                <button>
                  <span>HTML</span>
                </button>
                <button>
                  <span>CSS</span>
                </button>
                <button>
                  <span>BOOTSTRAP</span>
                </button>
                <button>
                  <span>JAVASCRIPT</span>
                </button>
                <button>
                  <span>REACT JS</span>
                </button>
              </div>
            </div>
          </div>
          <div className='about-content'>
            <div className='title2'>Let's introduce about myself</div>
            <div className='content1'>
              <p>I'm a <span>Frontend Web Developer</span> building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.</p>
              <p>I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming</p>
              <p>I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then here is my resume down here</p>
            </div>
            <div className='resumebtn'>

              <button>
                <span>RESUME</span>

                <a href={pdf}> <span><ArrowCircleRightIcon /></span></a>
              </button>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default About;

