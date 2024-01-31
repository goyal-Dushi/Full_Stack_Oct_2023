import { useParams } from 'react-router-dom';
import useFetchData from '../../hooks/useFetchData';
import Product from '../../components/product/product';
import Loader from '../../components/loader';

import './productListing.css';

const ProductListing = () => {

    const { categoryName } = useParams();

    const url = categoryName
    ? `https://fakestoreapi.com/products/category/${categoryName}`
    : `https://fakestoreapi.com/products`;

    const {data: products, error, isLoading} = useFetchData(url, []);

    return (
        <div className="container">
            {
                isLoading ? (
                    <Loader />
                ): (
                    <>
                        <div className="product-list">
                            {
                                products && products.map((product)=>{
                                    return <Product key={product.id} product={product}/>   
                                })
                            }
                        </div>
                    </>
                )
            }
        </div>
    )

}

export default ProductListing;

