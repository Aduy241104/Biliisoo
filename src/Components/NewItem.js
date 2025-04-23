import React from 'react'
import { useNavigate } from 'react-router-dom'

function NewItem({ imgLink, title, id }) {

    const navigate = useNavigate();

    function handleChangePage(id) {
        navigate(`/media/${id}`);
    }

    return (
        <div className='col-md-4 col-6 mb-4'>
            <div className='item-new bg-secondary rounded-3 pb-3'>
                <div className='item-new-img-layout'>
                    <img src={ `${process.env.PUBLIC_URL}${imgLink}` } alt="" className='' />
                </div>
                <div className='pt-2 text-center p-4'>
                    <p className='text-light line-clamp2'>{ title }</p>
                    <button
                        className='bg-purple rounded-3 border-0 pt-2 pb-2 p-4 text-light w-100 mt-4'
                        onClick={ () => handleChangePage(id) }
                    >
                        View more
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NewItem