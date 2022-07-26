import React from 'react';
import logo from '../Images/Yamakai.png';
import logo2 from '../Images//yamakai2.png';
import round from '../Images/round.png';
import person from '../Images/person.png';
import './style.css'

const Navbar = () => {
    return (
        <div>
            <nav className=" bg-white-md pt-3 px-3 shadow-md mb-md-5 mb-4">
                <div className="navbar-main-div">
                    <div>
                        <a className="navbar-brand " href="#"> <img className='logo' src={logo} alt="" /> </a>
                        <a className="navbar-brand logo2" href="#"> <img src={logo2} alt="" /> </a>
                    </div>
                    <div >
                        <ul className=" d-flex ">
                            <div className='nav-links1 '>
                                <div className='d-flex'>
                                    <a className="nav-link " aria-current="page" href="#">Home</a>
                                    <a className="nav-link " aria-current="page" href="#">Marketing</a>
                                    <a className="nav-link " aria-current="page" href="#">Social Media</a>
                                    <a className="nav-link " aria-current="page" href="#">Sales Copy</a>
                                    <a className="nav-link " aria-current="page" href="#">Blogs</a>
                                    <a className="nav-link " aria-current="page" href="#">Others</a>
                                </div>

                            </div>

                            <img className='round-img' src={round} alt="" />
                            <img className='person-img' src={person} alt="" />
                        </ul>
                    </div>
                </div>
            </nav>
            <div className='d-flex justify-content-between px-md-5 px-3 mb-md-5 mb-4'>
                <h3 className='home-writ1'>Home/Writing Assistant</h3>
                <h4 className='home-writ2'>Home/Template</h4>
                <div>
                    <button className="btn px-md-5 px-4 p-2" type="button">Save</button>
                    <button className="btn px-5 py-2 ms-2 filter-button" type="button">Filter</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;