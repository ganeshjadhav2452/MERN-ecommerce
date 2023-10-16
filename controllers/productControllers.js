import slugify from 'slugify';
import Product from '../models/ProductModel.js'
import fs from 'fs'
export const createProductController = async (req, res) => {
    const { name, quantity, slug, shipping, description, price, category } = req.fields;
    const { photo } = req.files;
    try {
        if (!name || !quantity || !description || !price || !category) return res.status(401).json({
            success: false,
            message: 'please fill all  required fields'
        })

        const product = new Product({
            ...req.fields, slug: slugify(name)
        })
        if (photo) {
            product.photo.data = fs.readFileSync(photo.path)
            product.photo.contentType = photo.type
        }
        await product.save()

        return res.status(200).json({
            success: true,
            message: `product created successfully`,
            product
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: 'something went wrong while creating product...',
            error
        })
    }
}


export const getProductsController = async (req, res) => {
    try {
        const products = await Product.find().populate('category').select('-photo').sort({ createdAt: -1 })


        return res.status(200).json({
            success: true,
            total: products.length,
            message: 'successfully fetched all products',
            products,
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: 'error while getting products',
            error
        })

    }
}

// get single product

export const getSingleProductController = async (req, res) => {
    const { slug } = req.params;
    console.log('this is slug', slug)
    try {
        const product = await Product.findOne({ slug }).populate('category').select('-photo');

        return res.status(200).json({
            success: true,
            message: `fetched product successfully`,
            product
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: 'error while getting product',
            error
        })

    }
}

// get photo

export const productPhotoController = async (req, res) => {
    const { pid } = req.params;
    try {
        const product = await Product.findById(pid).select('photo')

        if (product.photo.data) {
            res.set('Content-Type', product.photo.contentType)
            return res.status(200).send(product.photo.data)
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: 'error while getting photo',
            error
        })
    }
}

// delete product

export const deleteProductController = async (req, res) => {
    const { id } = req.params;
    try {

        await Product.findByIdAndDelete(id).select('-photo')

        return res.status(200).json({
            success: true,
            message: 'product delete successfully'
        })
    } catch (error) {

        console.log(error)
        return res.status(500).json({
            success: false,
            message: 'error while deleting product',
            error
        })
    }
}

//upate producta
export const updateProductController = async (req, res) => {
    try {
        const { name, description, price, category, quantity, shipping } =
            req.fields;
        const { photo } = req.files;
        //validation
        switch (true) {
            case !name:
                return res.status(500).send({ error: "Name is Required" });
            case !description:
                return res.status(500).send({ error: "Description is Required" });
            case !price:
                return res.status(500).send({ error: "Price is Required" });
            case !category:
                return res.status(500).send({ error: "Category is Required" });
            case !quantity:
                return res.status(500).send({ error: "Quantity is Required" });
            case photo && photo.size > 1000000:
                return res
                    .status(500)
                    .send({ error: "photo is Required and should be less then 1mb" });
        }

        const products = await productModel.findByIdAndUpdate(
            req.params.pid,
            { ...req.fields, slug: slugify(name) },
            { new: true }
        );
        if (photo) {
            products.photo.data = fs.readFileSync(photo.path);
            products.photo.contentType = photo.type;
        }
        await products.save();
        res.status(201).send({
            success: true,
            message: "Product Updated Successfully",
            products,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error in Updte product",
        });
    }
};