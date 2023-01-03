import * as React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import { useProductsContext } from "../hooks/useProductsContext";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const AddNewProduct = () => {

    const {dispatch} = useProductsContext();
    const[verify,setVerify] = useState('')
    const [error, setError] = useState(null);
    const [open, setOpen] = useState(false);
    const [openError, setOpenError] = useState(false);
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
      });



    const [imageLink, setImageLink] = useState('')
    const [productName,setProductName] = useState('')
    const [category,setCategory] = useState('')
    const [brand,setBrand] = useState('')
    const [model,setModel] = useState('')
    const [features,setFeatures] = useState('')
    const [year,setYear] = useState('')
    const [price,setPrice] = useState('')
    const [description,setDescription] = useState('')


    //handleSubmit
    const handleSubmit = async (e) => {
        e.preventDefault()

        const product = {imageLink,productName,category,brand,model,features,year,price,description}

        const response = await fetch('api/products',{
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const json = await response.json()

        if(!response.ok){
            setError(json.error)
            setOpenError(true);

        }
        if(response.ok){
            setProductName('')
            setCategory('')
            setBrand('')
            setModel('')
            setFeatures('')
            setYear('')
            setPrice('')
            setDescription('')
            setError(null)
            console.log('New Product added',json)
            dispatch({type: 'CREATE_PRODUCT', payload: json})   
            setOpen(true);
            setVerify("Add Succesful")                                
        }

    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
        setOpenError(false);
      };
    


    return (
        <div className="formWrap">
        <div className="formWidth">
        {/* <form className="create" onSubmit={handleSubmit}> */}
            <br />
            <h1 className='addnewh1'>Add a New Product</h1>
            <br/>
            <div className="form-group">
                <label>Image Link</label>
                <input 
                className="form-control"
                type="text"
                onChange={(e) => setImageLink(e.target.value)}
                value = {imageLink}
                />
            </div>
            <div className="form-group">
                <label>Product Name</label>
                <input 
                className="form-control"
                type="text"
                onChange={(e) => setProductName(e.target.value)}
                value = {productName}
                />
            </div>
            <div className="row">
                <div className="form-group col-md-6">
                    <label>Brand</label>
                    <input 
                    className="form-control"
                    type="text"
                    onChange={(e) => setBrand(e.target.value)}
                    value = {brand}
                    />
                </div>
                <div className="form-group col-md-6">
                    <label>Model</label>
                    <input 
                    className="form-control"
                    type="text"
                    onChange={(e) => setModel(e.target.value)}
                    value = {model}
                    />
                </div>
                </div>
                <div className="row">
                <div className="form-group col-md-6">
                    <label>Category</label>
                    <select 
                        id="inputState" 
                        className="form-control"
                        type="text"
                        onChange={(e) => setCategory(e.target.value)}
                        value = {category}>
                        <option value='Mobile Phones'>Mobile Phones</option>
                        <option value='Laptops'>Laptops</option>
                        <option value='Televisions' >Televisions</option>
                        <option value='Others' >Others</option>
                    </select>
                </div>
                <div className="form-group col-md-6">
                <label>Features</label>
                    <input 
                    className="form-control"
                    type="text"
                    onChange={(e) => setFeatures(e.target.value)}
                    value = {features}
                    />
                </div>
                </div>
                <div className="row">
                <div className="form-group col-md-6">
                    <label>Year</label>
                    <input 
                    className="form-control"
                    type="year"
                    onChange={(e) => setYear(e.target.value)}
                    value = {year}
                    />
                </div>
                <div className="form-group col-md-6">
                    <label>Price</label>
                    <input 
                    className="form-control"
                    type="text"
                    onChange={(e) => setPrice(e.target.value)}
                    value = {price}
                    />
                </div>
            </div>
            <div className="form-group">
                <label>Product Description</label>
                <textarea rows="3"
                className="form-control"
                type="textarea"
                onChange={(e) => setDescription(e.target.value)}
                value = {description}
                ></textarea>
            </div>
            
            <br/>
            <div  align="center">
                <Link to="/admin" className="btn btn-danger addnewbtn">Cancel</Link>
                <button onClick={handleSubmit} className="addnewbtn btn btn-dark">Add Product</button>
                <br />
                <div className="successmsg">
                        <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
                            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                {verify}
                            </Alert>
                        </Snackbar>
                    
                </div>
                
            </div>
            <div>
            {error && 
                <Snackbar open={openError} autoHideDuration={5000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                        {error}
                    </Alert>
                </Snackbar>
                   }
            </div>       
            <br/>
            <br />  
        </div>
        </div>
       
    );
}
 
export default AddNewProduct;