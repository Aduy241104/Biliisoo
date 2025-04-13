import React from 'react'
import NewItem from './NewItem'

function News() {
    return (
        <div className='container-fluid special-background pt-5 pb-5'>
            <div className='row'>
                <div className='col-md-2 col-12 flex-wrap align-content-center mb-4'>
                    <h5 className='ps-2 pb-2 pt-2 bg-light rounded-5'>Media</h5>
                </div>

                <div className='col-md-10 col-12 container-fluid p-4'>
                    <div className='row'>
                        <NewItem />
                        <NewItem />
                        <NewItem />
                        <NewItem />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News