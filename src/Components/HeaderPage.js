import React from 'react'
import '../StyleCSS/Total.css'
import { Link } from 'react-router-dom'

function HeaderPage() {
    return (
        <div className='container-fluid'>
            <div className='row p-4'>
                <div className='col-lg-4'>
                    <ul className='nav-option fs-4 fw-bold'>
                        <li><Link>Music</Link></li>
                        <li><Link>Store</Link></li>
                        <li><Link>Schedule</Link></li>
                        <li><Link>Subcribe</Link></li>
                    </ul>
                </div>

                <div className='col-lg-4 text-center'>
                    <img src="//shop.jisoo.io/cdn/shop/files/Logo_Desktop_Blk_100x.png?v=1738043611" alt="" />
                </div>
                <div className='col-lg-4 d-flex justify-content-end fs-4'>
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