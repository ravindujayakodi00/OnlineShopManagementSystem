import { useProductsContext } from "../hooks/useProductsContext";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Others = () => {

    const {products,dispatch} = useProductsContext();

    useEffect(() => {
        const  fetchProducts = async () => {
            const response = await fetch('/api/products/others')
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_PRODUCTS', payload: json})
            }
        }
        fetchProducts()
    },[dispatch])

    return (
        <section>
        <div className="MobilePhones">
            <Navbar/>
            
            <div className="container-fluid">

            <div className="row ">   
            {products && products.map((product) => (
            <div className="card col-lg-4 col-md-6">
                <Link className="cardLink" to={`/moredetails/${product._id}`}>   
                <img src={product.imageLink} alt="productImage" width="200px" height="200px"/>
                <div className="card-body">
                <hr />

                <h5 className="card-title">{product.productName}</h5>
                <p className="card-text">LKR {product.price}</p>
                </div>
                </Link> 
            </div>
           
                ))}
            </div>
            </div> 
        </div>
        </section>
    );
}
 
export default Others;