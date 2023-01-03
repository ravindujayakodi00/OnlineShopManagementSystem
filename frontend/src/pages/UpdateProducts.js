import { useProductsContext } from "../hooks/useProductsContext";
import {  useParams } from "react-router-dom";
import { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import * as React from 'react';



const UpdateProducts = () => {
    const {dispatch} = useProductsContext();
    const {id} = useParams();
    const[verify,setVerify] = useState('')
    const [error, setError] = useState(null);
    const [open, setOpen] = useState(false);
    const [openError, setOpenError] = useState(false);
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
      });


    const [productName, setProductName] = useState('');
    const [category, setCategory] = useState('');
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [features, setFeatures] = useState('');
    const [year, setYear] = useState('');
    const [price, setPrice] = useState('');
    const [imageLink, setImageLink] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        const  fetchProducts = async () => {
            const response = await fetch(`/api/products/${id}`)
            const json = await response.json()

            if (response.ok) {
                setProductName(json.productName)
                setCategory(json.category)
                setBrand(json.brand)
                setModel(json.model)
                setFeatures(json.features)
                setYear(json.year)
                setPrice(json.price)
                setImageLink(json.imageLink)
                setDescription(json.description)
            }
        }
        fetchProducts()
    },[id])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(`/api/products/${id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                productName,
                category,
                brand,
                model,
                features,
                year,
                price,
                imageLink,
                description
            })
        })
        const json = await response.json()

        if(!response.ok){
            setError(json.error)
            setOpenError(true);

        }

        if (response.ok) {
            dispatch({type: 'UPDATE_PRODUCT', payload: json})
            setOpen(true);
            setVerify("Update Succesful")                                

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
        <form className="create" onSubmit={handleSubmit}>
            <br />
            <h1 className="addnewh1">UPDATE PRODUCT</h1>
            <br/>
            <div className="form-group">
                <label>Image Link</label>
                <input 
                type="text" 
                className="form-control" 
                id="imageLink" 
                value={imageLink} 
                onChange={(e) => setImageLink(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Product Name</label>
                <input type="text" className="form-control" id="productName" value={productName} onChange={(e) => setProductName(e.target.value)} />
            </div>
            <div className="row">
                <div className="form-group col-md-6">
                    <label>Brand</label>
                    <input type="text" className="form-control" id="brand" value={brand} onChange={(e) => setBrand(e.target.value)} />
                </div>
                <div className="form-group col-md-6">
                    <label>Model</label>
                    <input type="text" className="form-control" id="model" value={model} onChange={(e) => setModel(e.target.value)} />
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
                        type="text"
                        className="form-control" 
                        id="price" value={price} 
                        onChange={(e) => setPrice(e.target.value)} 
                        />
                </div>
            </div>
            <div className="form-group">
                <label>Product Description</label>
                <textarea rows="3"
                type="textarea" 
                className="form-control" 
                id="description" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                ></textarea>
            </div>
            
            <br/>
            <div align="center">
                <Link to="/admin" className="btn btn-danger addnewbtn">Cancel</Link>
                <button to="/admin" type="submit" className="btn btn-warning addnewbtn">Update Product</button>
                <br />
                <div className="successmsg">
                    <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                            {verify}
                        </Alert>
                    </Snackbar>
                </div>
            </div>
            {error && 
            <Snackbar open={openError} autoHideDuration={5000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    {error}
                </Alert>
            </Snackbar>
            }
            <br />
            <br />

            
           
        </form>
        </div>
        </div>
    )
}

export default UpdateProducts
