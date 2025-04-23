import React from 'react'
import NewItem from './NewItem'

function News({ data }) {

    return (
        <div className='container-fluid special-background pt-5 pb-5'>
            <div className='row d-flex justify-content-center'>
                <div className='col-md-2 col-12 flex-wrap align-content-center mb-4'>
                    <h5 className='ps-2 pb-2 pt-2 bg-light rounded-5'>Media</h5>
                </div>

                <div className='col-md-10 col-12 container-fluid p-4'>
                    <div className='row'>
                        { data.slice(0,3).map((item) => {
                            return (
                                <NewItem
                                    imgLink={ item.thumbnail }
                                    title={item.title}
                                    id={item.id}
                                />
                            )
                        }) }
                    </div>
                </div>
                <button className='bg-secondary pe-4 ps-4 p-3 border-0 rounded-5 text-light col-md-2 col-6 mt-5'>View More <i class="fa-solid fa-arrow-right"></i></button>
                
            </div>
         
        </div>
    )
}

export default News