import React, { useEffect, useLayoutEffect, useState } from 'react'
import Swip from './Swip'
import SuggestSection from '../Components/SuggestSection';
import data from '../Store.json'
import { useParams } from 'react-router-dom';


function ProductDetail() {
    const [product, setProduct] = useState({});
    const [inclusions, setInclusions] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        data.Product.forEach((item) => {
            if (item.id == id) {
                setProduct(item);
                setInclusions(item.inclusions);
            }
        })
    }, [id])

    useLayoutEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, [])

    function shareLink() {
        if (navigator.share) {
            navigator.share({
                title: 'Check this out!',
                text: 'I found this cool product for you',
                url: 'https://yourdomain.com/product/123'
            })
                .then(() => console.log('Successful share'))
                .catch((error) => console.log('Error sharing', error));
        } else {
            alert("Sharing not supported on this browser.");
        }
    }

    return (
        <div className='container-fluid mt-4'>

            <div className='row'>
                <div className='col-md-6 col-12 mt-4'>
                    { (!product.images) ? "ERROR Please try again later" : <Swip images={ product.images } /> }
                </div>
                <div className='col-md-6 col-12 mt-4'>
                    <p className='mb-3'>{ product.artist }</p>
                    <h1>{ product.title }</h1>
                    <h4>${ product.price } USD</h4>
                    <p className='mt-4 mb-4 fs-6 text-secondary'>Pay over time for orders over 35,00 $ with</p>
                    <button className='btn bg-purple-2 w-50 rounded-5 p-3 mb-3 text-light'>Add to cart</button>
                    <ul className='list-infor'>
                        { inclusions.map((item, index) => {
                            return (
                                <li key={ index }>{ item }</li>
                            )
                        }) }
                    </ul>
                    <p className='mt-5 fw-bolder pe-5 ps-2'>
                        { product.officialNote }
                    </p>
                    <button onClick={ () => shareLink() } className="border-0 bg-transparent mb-5"><i className="fa-solid fa-share"></i> Share</button>
                    <div className='w-100 mt-5' style={ { height: '350px' } }>
                        <h5>YOU MIGHT ALSO LIKE</h5>
                        <SuggestSection
                            listProduct={ data.Product }
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail