import { useProductsContext } from "../hooks/useProductsContext";
import { useEffect,useState} from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const AllProducts = () => {

    const {products,dispatch} = useProductsContext();
    const[search,setSearch] = useState("");

    useEffect(() => {
        const  fetchProducts = async () => {
            const response = await fetch('/api/products')
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_PRODUCTS', payload: json})
            }
        }
        fetchProducts()
    },[dispatch])

    return (
        <section>
        <div className="All">
            <Navbar/>
            <input className="searchTerm" type="text" placeholder="Search Products..." onChange={(e) => setSearch(e.target.value)}/>                       
            <div className="container-fluid">

            <div className="row ">   
            {products && products.filter((product) => {
                    if(search === ""){
                        return product;
                    }else if(product.productName
                        .toLowerCase()
                        .includes(search.toLowerCase())
                        
                        ){
                        return product;
                    }
                })
            
            
            .map((product) => (
                
            <div key={product._id} className="card col-lg-4 col-md-6">
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
 
export default AllProducts;