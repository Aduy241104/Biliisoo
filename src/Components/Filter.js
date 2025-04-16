import React from 'react'

function Filter() {
    return (
        <div className='function-place row'>
            <div className='col-md-6 d-flex'>
                <p className='me-5'>Filter: </p>

                <div className="dropdown me-5 ms-5">
                    <p className="dropdown-toggle rounded-1" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Availability
                    </p>
                    <ul className="dropdown-menu rounded-2" aria-labelledby="dropdownMenuButton1">
                        <li>
                            <p className="dropdown-item">
                                0 Selected
                                <button className='ms-5 border-0'>reset</button>
                            </p>
                        </li>
                        <li><hr className="dropdown-divider" /></li>
                        <li className='dropdown-item'><input type="checkbox" className='' /> <label htmlFor="">In stock</label></li>
                        <li className='dropdown-item'><input type="checkbox" className='' /> <label htmlFor="">Out of stock</label></li>
                    </ul>
                </div>

                <div className="dropdown">
                    <p className="dropdown-toggle rounded-1" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                        Price
                    </p>
                    <ul className="dropdown-menu rounded-2" aria-labelledby="dropdownMenuButton1">
                        <li>
                            <p className="dropdown-item d-flex justify-content-between">
                                The highest price is 19$
                                <button className='ms-5 border-0'>reset</button>
                            </p>
                        </li>
                        <li><hr className="dropdown-divider" /></li>
                        <div className='dropdown-item d-flex justify-content-between'>
                            <input type="number" placeholder='From' className='pt-3 pb-3' />
                            <input type="number" placeholder='To' className='ms-3 pt-3 pb-3' />
                        </div>
                    </ul>
                </div>
            </div>


            <div className='col-md-6 d-flex justify-content-end pe-5'>
                <p className='me-5'>Sort by: </p>
                <div className="dropdown me-5 ms-5">
                    <p className="dropdown-toggle rounded-1" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Feature
                    </p>
                    <ul className="dropdown-menu rounded-2" aria-labelledby="dropdownMenuButton1">
                        <select name="" id="" className='dropdown-item'>
                            <option value="">Best selling</option>
                            <option value="">Price high to low</option>
                            <option value="">Price high to low</option>
                            <option value="">Price high to low</option>
                        </select>
                    </ul>
                </div>
                <p className=''>8 Products </p>

            </div>

        </div>
    )
}

export default Filter