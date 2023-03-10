import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useParams } from "react-router";
const Detail = props => {
    const  { id } = useParams();
    const [product, setProduct] = useState({
        title: '',
        price: 0,
        description: ''
    })
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProduct(res.data.product))
            .catch(err => console.log(err))
    }, [id])
    console.log(props)
    return (
        <div>
            {
                product ?
                    (
                        <>
                            <h1>Producto:</h1>
                            <h3>{product.title}</h3>
                            <h3>${product.price}</h3>
                            <h3>{product.description}</h3>
                            <Link to={`/product/${product._id}/edit`} >Editar</Link>
                        </>

                    ) :
                    <>
                        <h1>No Hay productos disponibles</h1>
                        <Link to="/">Agregar un producto</Link>
                    </>
            }
        </div>
    )
}

export default Detail;