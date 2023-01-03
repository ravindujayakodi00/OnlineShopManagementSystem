import { useEffect,useState } from "react";
import * as React from "react";
import {Link} from "react-router-dom";
import { Alert } from "@mui/material";
import { useProductsContext } from "../hooks/useProductsContext";
import AdminSidebar from "../components/AdminSidebar";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const ManageProducts = () => {

    const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
        <div>
            <Link className="btn btn-dark addnew" to='/addnewproduct'>Add New Product</Link>
            <AdminSidebar/>
            <div className="productDetails">
                <input className="searchTerm" type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)}/>
            <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Product Name</th>
                            <th scope="col">Category</th>
                            <th scope="col">Brand</th>
                            <th scope="col">Model</th>
                            <th scope="col">Features</th>
                            <th scope="col">Year</th>
                            <th scope="col">Price</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
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

                        <tr key={product._id}>
                            <td>{product.productName}</td>
                            <td>{product.category}</td>
                            <td>{product.brand}</td>
                            <td>{product.model}</td>
                            <td>{product.features}</td>
                            <td>{product.year}</td>
                            <td>Rs. {product.price}</td>
                            <td><Link className="btn btn-dark" to={`/updateproduct/${product._id}`}>Update</Link></td>

                            <td><button onClick={handleClickOpen} className="btn btn-danger">Delete</button></td>

<div>
              <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
              >
                <DialogTitle>{"Are you sure?"}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-slide-description">
                    <Alert severity="error">
                      {" "}
                      Are you sure to Delete{" "}
                    </Alert>
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancal</Button>
                  <Button onClick={async ()=> {
                                const response = await fetch(`/api/products/${product._id}`,{
                                    method: 'DELETE'
                                })
                                const json = await response.json()
                        
                                if (response.ok) {
                                    dispatch({type: 'DELETE_PRODUCT', payload: json})
                                    handleClose();

                                }
                            }}>Delete</Button>
                </DialogActions>
              </Dialog>
            </div>
                        </tr>

                            ))}
                    </tbody>
                </table>        
        </div>
       
        </div>
        );
}
 
export default ManageProducts;