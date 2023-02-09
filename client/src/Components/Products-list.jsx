
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';

const ProductList = props => {
    return(
        <div>
            <hr></hr>
            <h1>All Products</h1>
            {props.product.map((product, index)=>{
                //console.log(product);
                
                return( 
                    <>
                <Link to={`/product/${product._id}`}>
                    <p>{product.title}</p>
                </Link>
                <DeleteButton id={product._id} />
                </>
                )
            }
            
            )}
        </div>
    )
}

export default ProductList