import React from 'react';
import logo from '../Images/Yamakai.png';
import round from '../Images/round.png';
import person from '../Images/person.png';
import './style.css'

const Navbar = () => {
    return (
        <div>
            <nav className=" bg-white pt-3 px-3 shadow mb-5">
                <div className="navbar-main-div">
                    <div>
                        <a className="navbar-brand" href="#"> <img className='logo' src={logo} alt="" /> </a>
                    </div>
                    <div>
                        <ul className=" d-flex ">
                            <a className="nav-link " aria-current="page" href="#">Home</a>
                            <a className="nav-link " aria-current="page" href="#">Marketing</a>
                            <a className="nav-link " aria-current="page" href="#">Social Media</a>
                            <a className="nav-link " aria-current="page" href="#">Sales Copy</a>
                            <a className="nav-link " aria-current="page" href="#">Blogs</a>
                            <a className="nav-link " aria-current="page" href="#">Others</a>
                            <img className='round-img' src={round} alt="" />
                            <img className='person-img' src={person} alt="" />
                        </ul>
                    </div>
                </div>
            </nav>
            <div className='d-flex justify-content-between px-5 mb-5'>
                <h3>Home/Writing Assistant</h3>
                <div>
                    <button className="btn px-5 py-2" type="button">Save</button>
                    <button className="btn px-5 py-2 ms-2" type="button">Filter</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;