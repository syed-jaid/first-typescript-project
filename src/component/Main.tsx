import React from 'react';

const Main = () => {
    return (
        <div className='px-5'>
            <h5>Enter input to get <a className='text-decoration-none'>Writing Assistant</a></h5>
            {/* main part  */}
            <div className='mt-4'>
                <span className='text-color'>Words count:</span> <input className='small-input-1 text-color' value='0' type="number" name="" id="" />
                <span className='ms-5 text-color'>Prompt:</span>
                <div className="input-group  d-inline">
                    <button className="btn dropdown-toggle bg-white text-primary mb-1 small-input-2" type="button" data-bs-toggle="dropdown" aria-expanded="false"><span className='  text-color me-3'>Select</span></button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                    </ul>
                </div>
                <span className='ms-5 text-color'>Creativity:</span>
                <div className="input-group  d-inline">
                    <button className="btn dropdown-toggle bg-white text-primary mb-1 small-input-2" type="button" data-bs-toggle="dropdown" aria-expanded="false"><span className=' me-3 text-color'>Select</span></button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                    </ul>
                </div>
            </div>
            <div>
                <div className='d-flex justify-content-end'>
                    <p className='text-color'>word: 00 | character: 0/250</p>
                </div>
                {/* main input box  */}
                <div className='bg-white p-3'>
                    <ul className="nav mb-2">
                        <li className="nav-item">
                            <a className="nav-link " aria-current="page" href="#">hyperlink</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " aria-current="page" href="#">text cut</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " aria-current="page" href="#">underline</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " aria-current="page" href="#">underline</a>
                        </li>
                    </ul>

                    <div className='border border-secondary'></div>
                    <div className='p-3'>
                        <input type="text" className='big-input-file' />
                    </div>
                </div>
            </div>
            {/* Write for me part  */}
            <div className='d-flex justify-content-center'>
                <button className='wfm-button'>Write for me</button>
            </div>
        </div>
    );
};

export default Main;