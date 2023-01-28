import { Product } from "../models/Product.js";

export const createProduct = async (req, res) => {
    try {
        let newProduct = {
            name: req.body.name,
            image: req.body.image,
            price: req.body.price,
            qty: req.body.qty,
            info: req.body.info,
        }
        let product = await Product.findOne({name: newProduct.name });

        if(product) {
            return res.status(401).json({
                msg: `Product Already Exists`
            })
        }
        product = new Product(newProduct);
        product = await product.save(); //insert the product to database
        res.status(200).json({
            result: `Product Created`,
            product
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: error.message
        })
    }
}

export const getAllProducts = async (req, res) => {
    try {
        let products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({
            msg: error.message
        })
    }
}

export const getSingleProduct = async (req, res) => {
    try {
        let productId = req.params.id;
        let product = await Product.findById(productId);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({
            msg: error.message
        })
    }
}

export const updateProduct = async (req, res) => {
    try {
        let productId = req.params.id;
        let updateProduct = {
            name: req.body.name,
            image: req.body.image,
            price: req.body.price,
            qty: req.body.qty,
            info: req.body.info,
        }
        //Product exists or not
        let product = await Product.findById(productId);

        if(!product) {
            return res.status(401).json({
                msg: `Product not found`
            })
        }
        //update
        product = await Product.findByIdAndUpdate(productId, {
            $set: updateProduct
        }, { new : true });

        res.status(200).json({
            result: `Product Updated`,
            product: product
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: error.message
        })
    }
}

export const deleteProduct = async (req, res) => {
    try {
        let productId = req.params.id;

        let product = Product.findById(productId);

        if(!product) {
            return res.status(401).json({
                msg: `Product not found`
            })
        }

        //delete
        product = await Product.findByIdAndDelete(productId);
        res.status(200).json({
            result: `Product Deleted`,
            product
        });
    } catch (error) {
        res.status(500).json({
            msg: error.message
        })
    }
}