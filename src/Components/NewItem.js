import React from 'react'

function NewItem({ imgLink, title, id }) {
    return (
        <div className='col-md-4 col-6 mb-4'>
            <div className='item-new bg-secondary rounded-3 pb-3'>
                <img src={ `${process.env.PUBLIC_URL}${imgLink}`} alt="" className='w-100' />
                <div className='pt-2 text-center p-4'>
                    <p className='text-light line-clamp2 mb-5'>{ title }</p>
                    <button className='bg-purple rounded-3 border-0 pt-2 pb-2 p-4 text-light w-100 mt-4'>View more</button>
                </div>
            </div>
        </div>
    )
}

export default NewItem