import React, {useState, useEffect} from 'react'

import axios from 'axios';
import ProductList from '../Components/Products-list';
import ProductForm from '../Components/ProductForm';


const Home = () => {
    const [product, setProduct] = useState([]);
    

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then(res=>setProduct(res.data.list))
        .catch(err=>console.log("Error: ", err))
    }, []);

    return (
        <>
            <ProductForm />
            <ProductList product={product}/>
        </>
    )
}

export default Home;