import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Link, useNavigate, useParams } from 'react-router-dom'


const Details = () => {
    const [product, setProduct] = useState({})
    const [description, setDescription] = useState([])


    const params = useParams()
    const navigate = useNavigate()

    const fetchProduct = () => {
        axios.get(`https://recursing-hellman.135-125-93-148.plesk.page/api/products/${params.id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    }

    const fetchDescription = () => {
        fetch(`https://recursing-hellman.135-125-93-148.plesk.page/api/products?productId=${params.id}`)
            .then(res => res.json())
            .then(res => setDescription(res))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchProduct();
        fetchDescription()
    }, [params])



    return (
        <div className="container">
            <div className="detail">
                <Link to='/'>
                    <div  onClick={() => navigate(-1)}>
                        <button className='btn-back'>Back</button>
                    </div>
                </Link>
            </div>
            <div className="row ">
                <div className="card-detail">
                    <img
                        src='http://www.clker.com/cliparts/F/n/0/X/P/8/shopping-cart-purple-md.png'
                        alt="product "
                        width="220"
                        className='img-cart'
                    />
                </div>
            </div>
            <div >
                <div>
                    <h3 className="card__name">{product.name}</h3>
                </div>
            </div>
            <div >
                <div >
                    <h3 className="id-text">{product.price}</h3>
                </div>
            </div>
            <div >
                <div >
                    <span className="product-text">{product.description}</span>
                </div>
            </div>
            <div  >
                {description.map((description, i) => (<product description={description} key={i} />))}
            </div>

        </div>
    )
}

export default Details