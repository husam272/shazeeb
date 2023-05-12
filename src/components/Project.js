import React from 'react';
// import project1 from "./images/project1.png";
import projectdata from './Projectdata';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from '@mui/material';


const Project = () => {
  return (
    <div>

      <div className='projects' id='project'>
        <div className='header1'>
          <div className='backarrow'>
            <NavLink to="/"><ArrowBackIcon /><span></span></NavLink>

          </div>


          <div className='project-title'>PROJECTS</div>
        </div>


        <section className=' py-lg5 container section01 ' id="section-plans">

          <div className='row justify-content-center align-item-center'>
            {projectdata.carddata.map((item, index) => {
              return (
                <div className='col-11 col-lg-4 col-md-6 col-lg-3 mx-0 mb-4  ' key={index}>
                  <div className="card p-0 overflow-hidden h-100 shadow  " >

                    {/* <img className="card-img-top " src={item.img}
                      alt="Image Alt"
                    /> */}
                    <LazyLoadImage className="card-img-top " src={item.img}
                      alt="Image Alt"
                    />
                    <div className="card-body card__side card__side--back card__side--back-1">
                      <div>
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.para}</p>
                        <div className='link-btn'>
                          <Link to={item.link}>
                            <button>
                              <span>PROJECT LINK
                                {/* <i class="fa-solid fa-arrow-right"></i> */}
                                <i class="fa-solid fa-link"></i>

                              </span>
                            </button>
                          </Link>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>
              )
            })}


          </div>

        </section>

      </div>





    </div>







  )
}

export default Project
