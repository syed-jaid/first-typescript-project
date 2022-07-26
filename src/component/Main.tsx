import React from 'react';
import './style.css'

const Main = () => {
    return (
        <div className='px-md-5 px-3'>
            <h5 className='home-writ1'>Enter input to get <a className='text-decoration-none '>Writing Assistant</a></h5>
            <h6 className='home-writ2'>Enter input to get <a className='text-decoration-none '>Writing Assistant</a></h6>
            <div className='the-main-div'>
                <div className='left-site'>
                    {/* main part  */}
                    <div className='my-4'>
                        <span className='text-color'>Words count:</span> <input className='small-input-1 text-color' value='0' type="number" name="" id="" />
                        <span className='ms-md-5 ms-3 text-color'>Prompt:</span>
                        <div className="input-group  d-inline">
                            <button className="btn dropdown-toggle bg-white text-primary mb-1 small-input-2" type="button" data-bs-toggle="dropdown" aria-expanded="false"><span className='text-color me-3'>Select</span></button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                            </ul>
                        </div>
                        <div className='create-input-div '>
                            <span className='ms-md-5 ms-3 text-color'>Creativity:</span>
                            <div className="input-group  d-inline">
                                <button className="btn dropdown-toggle bg-white text-primary mb-1 small-input-2" type="button" data-bs-toggle="dropdown" aria-expanded="false"><span className=' me-3 text-color'>Select</span></button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='d-flex justify-content-end'>
                            <p className='text-color'>word: 00 | character: 0/250</p>
                        </div>
                        {/* main input box  */}
                        <div className='bg-white p-md-3 p-2 shadow-sm'>
                            <ul className="nav mb-2">
                                <li className="nav-item">
                                    <a className="nav-link " aria-current="page" href="#"><span className='nav-hight shadow bg-body rounded'>B</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " aria-current="page" href="#"><span className='nav-hight shadow bg-body rounded'>I</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " aria-current="page" href="#">hyperlink</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " aria-current="page" href="#">text cut</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " aria-current="page" href="#">underline</a>
                                </li>
                                <li className="nav-item nav-item-none">
                                    <a className="nav-link " aria-current="page" href="#">underline</a>
                                </li>
                            </ul>

                            <div className='hr-input'></div>
                            <div className='p-3'>
                                <textarea className='big-input-file' ></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hr-big'></div>

                {/* Write for me part  */}
                <div className=''>
                    {/* copy div */}
                    <div className='d-flex justify-content-center mx-auto'>
                        <button className='wfm-button'>Write for me</button>
                    </div>
                    <div className='d-flex justify-content-end '>
                        <p className='text-color-2 clear-div'>Clear</p>
                    </div>
                    {/* copy 1  */}
                    <div className='copy-main-div'>
                        <span className='copy'>Copy</span>
                        <div className='hr-div'></div>
                        <p className='copy-text'>As artificial intelligence continues to evolve, it is becoming increasingly capable of generating original and insightful content.</p>
                    </div>
                    {/* copy 1  */}
                    <div className='copy-main-div'>
                        <span className='copy'>Copy</span>
                        <div className='hr-div'></div>
                        <p className='copy-text'>This blog post is a prime example; the title was generated by AI within 10 seconds. AI is quickly becoming a powerful tool for content creators and marketers alike.</p>
                    </div>
                    {/* copy 1  */}
                    <div className='copy-main-div'>
                        <span className='copy'>Copy</span>
                        <div className='hr-div'></div>
                        <p className='copy-text'>As artificial intelligence continues to evolve, it is becoming increasingly capable of generating original and insightful content. This blog post is a prime example; the title was generated by</p>
                    </div>
                </div>
            </div>
            <div className='button-links'>
                <ul className="d-flex justify-content-center mb-0 pb-3 ps-0">
                    <a className="nav-link " aria-current="page" href="#">Home</a>
                    <a className="nav-link " aria-current="page" href="#">Marketing</a>
                    <a className="nav-link " aria-current="page" href="#">Social Media</a>
                    <a className="nav-link " aria-current="page" href="#">Sales Copy</a>
                    <a className="nav-link " aria-current="page" href="#">Blogs</a>
                    <a className="nav-link " aria-current="page" href="#">Others</a>
                </ul>
            </div>
        </div>
    );
};

export default Main;