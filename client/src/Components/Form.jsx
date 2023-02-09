import React from 'react';


const Form = (props) => {
    const { onSubmitHandler, product, setProduct } = props;

    return (
        <div>
            <form onSubmit={(e) => onSubmitHandler(e)}>
                <div className="form">
                    <label htmlFor="titleInput">Title</label>
                    <input type="text" value={product.title} id="titleInput" 
                        onChange={(e) => setProduct({ ...product, title: e.target.value })} />
                </div>
                <div className="form">
                    <label htmlFor="priceInput">Price</label>
                    <input type="number" value={product.price} id="priceInput" 
                        onChange={(e) => setProduct({ ...product, price: e.target.value })} />
                </div>
                <div className="form">
                    <label htmlFor="descriptionInput">Description</label>
                    <input type="text" id="descriptionInput" value={product.description} 
                        onChange={(e) => setProduct({ ...product, description: e.target.value })} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form;