const { default: mongoose } = require('mongoose');
const Product = require('../models/productModel');

//get all products
const getProducts = async (req,res) => {
    const products = await Product.find().sort({createdAt: -1});

    res.status(200).json(products);
}
const getMobilePhones = async (req,res) => {
    const products = await Product.find({category:"Mobile Phones"}).sort({createdAt: -1});

    res.status(200).json(products);
}
const getLaptops = async (req,res) => {
    const products = await Product.find({category:"Laptops"}).sort({createdAt: -1});

    res.status(200).json(products);
}
const getTelevision = async (req,res) => {
    const products = await Product.find({category:"Television"}).sort({createdAt: -1});

    res.status(200).json(products);
}
const getOthers = async (req,res) => {
    const products = await Product.find({category:"Others"}).sort({createdAt: -1});

    res.status(200).json(products);
}
//get a single product
const getProduct = async(req,res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such a product'});
    }

    const product = await Product.findById(id)

    if(!product) {
        return res.status(404).json({error: 'No such a product'});
    }

    res.status(200).json(product);
}

//create a new product
const createProduct = async (req,res) => {
    const {imageLink,productName,brand,model,category,features,year,price,description} = req.body;

    try{
        if(!imageLink || !productName || !brand || !model || !category || !features || !year || !price || !description) {
            return res.status(400).json({error: 'All fields are required'});
        }
        
        const product = await Product.create({imageLink,productName,brand,model,category,features,year,price,description});
        res.status(200).json(product);
    }
    catch (error) {
        res.status(400).json({error: error.messagge});
    }
}

//delete a product
const deleteProduct = async (req,res) => {
    const { id } = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such a product'});
    }

    const product = await Product.findOneAndDelete({_id: id});

    if(!product) {
        return res.status(404).json({error: 'No such a product'});
    }

    res.status(200).json(product);
}

//update a product
const updateProduct = async (req,res) => {
    const { id } = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such a product'});
    }

    const product = await Product.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!product) {
        return res.status(404).json({error: 'No such a product'});
    }

    res.status(200).json(product);
}

module.exports = {
    getProducts,
    getMobilePhones,
    getLaptops,
    getTelevision,
    getOthers,
    getProduct,
    createProduct,
    deleteProduct,
    updateProduct
}

