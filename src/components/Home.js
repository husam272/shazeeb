import React from 'react';
import "./home.css";
import { Link } from '@mui/material';
import gif1 from "../components/images/gif2.gif"
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
// import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import Navbar from './Navbar';
import { LazyLoadImage } from "react-lazy-load-image-component";
import Footer from './Footer';
const Home = () => {
    return (
        <>
            <section className='section01 ' id='home'>

                <div className='container1'>
                    <div className='content1'>
                        <div className='details1'>
                            I'M Mohammed <span className='name1'>Shazeeb .</span>
                        </div>
                        <div className='details2'>
                            Front End Developer .
                        </div>
                        <div className='details3'>
                            I am passionate about crafting visually stunning and intuitive user interfaces that enhance the user experience.</div>                  
                        <button>
                            <span><Link to='./contact'>Contact Me</Link></span>

                            <span><ArrowCircleRightIcon/></span>
                        </button>
                    </div>
                    <div className='content2'>
                        <div>
                            <div className='gif1'>
                                {/* <img src={gif1} /> */}
                                <LazyLoadImage className="card-img-top " src={gif1}
                                            alt="Image Alt"
                                        />
                            </div>
                        </div>
                    </div>

                </div>


            </section>
            <Navbar/>
         
         
        </>
    )
}

export default Home
