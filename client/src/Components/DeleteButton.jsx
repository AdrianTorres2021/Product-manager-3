import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const DeleteButton = props => {
    const navigate = useNavigate()
    const { id } = props;
    const remove = () => {
        axios.delete(`http://localhost:8000/api/products/delete/${id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
            
            navigate('/product/63daf0d98411d001dd1a91e1')
    }
    return (
        <button type="button" onClick={remove}>Delete</button>
    )
}

export default DeleteButton;