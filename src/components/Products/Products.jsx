import React, { useEffect, useState } from "react";
import Product from "./Product";
import './Products.css'
import axios from "axios";

const Products = ({ cat }) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(
                    cat
                        ? `http://localhost:5000/api/getall?cat=${cat}`
                        : "http://localhost:5000/api/getall");
                console.log(res.data.products)
                setProducts(res.data.products);
            }
            catch (err) {
                console.log(err)
            }
        };
        getProducts();
    }, [cat]);


    return (
        <div className="prodContainer">

            {products.map((item) => (
                <Product item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Products;