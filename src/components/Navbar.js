import React from 'react';
import "./navbar.css";
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';


const Navbar = () => {
    return (
        <>

            <section>
                <div className='nav1'>

                    <div className='list'>
                        <div className='list1'>
                            <NavLink to="/">
                                <div className='name'>HOME</div>
                                <div className='icon'><i class="fa-solid fa-house"></i></div>
                            </NavLink>
                        </div>
                        <div className='list1'>
                            <NavLink to="/About">
                                <div className='name'>ABOUT</div>
                                <div className='icon'><i class="fa-solid fa-circle-user"></i></div>
                            </NavLink>
                        </div>
                        <div className='list1'>
                            <NavLink to="/Projects">
                                <div className='name'>PROJECTS</div>
                                <div className='icon'> <i class="fa-solid fa-briefcase"></i></div>
                            </NavLink>
                        </div>
                        <div className='list1'>
                            <NavLink to="/Contact">
                                <div className='name'>CONTACT</div>
                                <div className='icon'><i class="fa-regular fa-address-card"></i></div>
                            </NavLink>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Navbar;
