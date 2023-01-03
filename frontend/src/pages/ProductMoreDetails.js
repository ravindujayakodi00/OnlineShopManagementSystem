import Navbar from "../components/Navbar";
import { useProductsContext } from "../hooks/useProductsContext";
import { useParams } from "react-router-dom";
import { useEffect, } from "react";


//setproducts
const ProductMoreDetails = () => {
    const {products,dispatch} = useProductsContext();
    const {id} = useParams();

    useEffect(() => {
        const  fetchProducts = async () => {
            const response = await fetch(`/api/products/${id}`)
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_PRODUCTS', payload: json})
            }
        }
        fetchProducts()
    },[dispatch,id])


    
    return (
        <div className="moredetails">
            <Navbar/>
            <br /><br />

            <div className="details">
                <img key={products._id} className="productImage" src={products.imageLink} alt="productImage" />
                <div className="details-section"></div>
                <div className="row section1">
                    <div className="col-lg-8">
                    </div>
                    <div className="col-lg-2">
                        <button className="btn btn-primary addnew">Add to Cart</button>
                    </div>

                </div>
                <div className="row section1">
                    <div className="col-lg-8">
                        <h1>{products.productName}</h1>
                    </div>
                    <div className="col-lg-2">
                        <h1>Rs. {products.price}</h1>
                    </div>

                </div>

                
                <div className="section1">
                <hr />

                    <h1>Product Details</h1>
                    <br />
                <div className="row">
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-lg-6">
                                <h6>Category</h6>
                            </div>
                            <div className="col-lg-6">
                                <p>{products.category}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-lg-6">
                                <h6>Brand</h6>
                            </div>
                            <div className="col-lg-6">
                                <p>{products.brand}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <br />

                <div className="row">
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-lg-6">
                                <h6>Model</h6>
                            </div>
                            <div className="col-lg-6">
                                <p>{products.model}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-lg-6">
                                <h6>Year</h6>
                            </div>
                            <div className="col-lg-6">
                                <p>{products.year}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-lg-6">
                                <h6>Features</h6>
                            </div>
                            <div className="col-lg-6">
                                <p>{products.features}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="section2">
                    <h1>Product Description</h1>
                </div>
                    <p>
                        {products.description}
                    </p>
                </div>
            </div>

        </div>

    )
}

export default ProductMoreDetails;