import { Add, Remove } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { addProduct } from "../redux/cartRedux";

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
const Product = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(0);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const dispatch = useDispatch()

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/getProduct/${id}`);
                setProduct(res.data.product)
                console.log(res.data)
            } catch (error) {
                console.log(error)
            }
        };
        getProduct();

    }, [id])

    const addToCart = () => {
        dispatch(addProduct({ ...product, quantity, color, size }));
    }
    return (
        <div>
            <div>
                <div className="top">
                    <Link to={'/'}>
                        <button className="topButton">CONTINUE SHOPPING</button>
                    </Link>
                </div>
                <div className="productWrapper">

                    <div className="imgContainer">
                        <img alt="" src={product.img} className="img" />
                    </div>
                    <div className="info">
                        <h1 style={{ fontWeight: 200 }}>{product.name}</h1>
                        <p className="text">
                            {product.description ? product.description : ''}
                        </p>
                        <div className="price">$ {product.price}</div>
                        <div className="prodFilterContainer">
                            {product && product.color && product.color.length > 0 ?
                                <div className="filter">
                                    <span className="filterTitle">Color</span>
                                    {product.color.map((c) => (
                                        <FilterColor color={c} key={c} onClick={() => setColor(c)} />
                                    ))}
                                </div> :
                                <div>
                                </div>
                            }

                            <div className="filterSize">
                                <span className="filterTitle">Size</span>
                                {product.size && product.size.length > 0 ?
                                    <select className="select" onChange={(event) => setSize(event.target.value)}>
                                        {product.size.map((s) => (
                                            <option key={s}>{s}</option>
                                        ))}
                                    </select>
                                    : <div></div>}

                            </div>
                        </div>
                        <div className="addContainer">
                            <div className="amountContainer">
                                <Remove onClick={() => quantity > 1 && setQuantity(quantity - 1)} />
                                <span className="amount">{quantity}</span>
                                <Add onClick={() => setQuantity(quantity + 1)} />
                            </div>
                            <button className="addToCartButton" onClick={addToCart}>ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Product;