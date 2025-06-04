import React, { useState } from 'react';
import sneakersImage from '../assets/Sneakers.jpeg';
import jeansImage from '../assets/Jeans.jpeg';
import jacketImage from '../assets/Jacket.jpeg';
import { image } from 'framer-motion/client';

const Products = () => {
    const [Products, setProducts] = useState([
        // DUMMY DATa
        { 
            id: 1, 
            name: 'Sneakers', 
            price: "KSH 5000", category: 'Footwear',
            image:sneakersImage,
            description: 'Comfortable Sneakers for everyday use.',
            size: '42',
            stock:50

    },
        { 
            id: 2, 
            name: 'Jeans', 
            price: "KSH 2000", category: 'Bottomwear',
             image: jeansImage,
            description: 'Stylish blue jeans.',
            size:'32',
            stock:100   },

        { 
            id: 3, 
            name: 'Jacket',
            price: "KSH 1500", category: 'Outerwear',
            image:jacketImage,
             description: 'Warm Leather Jacket.',
            size: 'L',
            stock:30
        },
    ]);

    const [newProduct, setNewProduct] = useState({
        name: '',
         price: '',
          category: '',
          image: '',
          description:'',
          size: '',
          stock:''
        });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({...newProduct, [name]: value});
    };
    const handleAddProduct = (e) => {
        e.preventDefault();
        if (newProduct.name && newProduct.category){
            setProducts([...Products, { ...newProduct, id: Products.length + 1}]);
            setNewProduct({name: '', price: '', category: '', image: '', description: '', size: '',stock: ''});

        }

    };

     const handleDeleteProduct = (id) => {
    setProducts(Products.filter(product => product.id !== id));
};
    return(
        <div className='product-management'>
            <h2>MANAGE PRODUCTS</h2>

            <form  onSubmit={handleAddProduct} className='add-product-form'>
                <input type='text'
                name='name'
                value={newProduct.name}
                onChange={handleInputChange}
                placeholder='Product Name'
                required
                />


                 <input type='text'
                name='price'
                value={newProduct.price}
                onChange={handleInputChange}
                placeholder='Price'
                required
                />

                 <input type='text'
                name='category'
                value={newProduct.category}
                onChange={handleInputChange}
                placeholder='Category'
                required
                />
                <button type='submit'>Add Product</button>

 
                
                 </form>
                 {/* Products table */}
                 <table>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Products.map(product => {
                            return(
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.category}</td>
                                <td>
                                     <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
                                </td>
                               
                            </tr>
                        );
                        })}
                    </tbody>
                 </table>
                 </div>
       
    );
};

export default Products;
