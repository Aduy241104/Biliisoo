import React from 'react'
import '../StyleCSS/Total.css'
import { Link } from 'react-router-dom'

function HeaderPage() {
    return (
        <div className='container-fluid'>
            <div className='row p-3'>
                <div className='col-md-4 col-12 headerResponsive d-flex'>
                    <nav className="navbar navbar-expand-lg">
                        <div className="">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                                <Link to={'/'} className='navbar-brand'>Home</Link>
                                <ul className="navbar-nav  mb-2 mb-lg-0 nav-option">
                                    <li className="nav-item">
                                        <Link to={'/Store'} className='nav-link'>Store</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className='nav-link'>Schedule</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className='nav-link'>Music</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className='col-md-4 col-12 text-center headerResponsive'>
                    <img src="//shop.jisoo.io/cdn/shop/files/Logo_Desktop_Blk_100x.png?v=1738043611" alt="" />
                </div>
                <div className='col-md-4 col-12 d-flex justify-content-end fs-4 headerResponsive'>
                    <i class="fa-brands fa-spotify me-3"></i>
                    <i class="fa-solid fa-cart-shopping me-3"></i>
                    <i class="fa-brands fa-youtube me-3"></i>
                    <i class="fa-brands fa-instagram me-3"></i>
                </div>
            </div>
        </div>
    )
}

export default HeaderPage