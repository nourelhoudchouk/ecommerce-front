import styled from "styled-components";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";



const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;


const Cart = () => {
    const cart = useSelector(state => state.cart)
    return (
        <div>
            <div className="wrapper">
                <h1 className="cartTitle">YOUR BAG</h1>
                <div className="top">
                    <Link to={'/'}>
                        <button className="topButton">CONTINUE SHOPPING</button>
                    </Link>
                </div>
                <div className="bottom">
                    <div style={{ flex: 3 }}>
                        {cart.products.map(product => (
                            <div className="product">
                                <div className="productDetail">
                                    <img style={{ width: '200px' }} key={product._id} alt="" src={product.img} />
                                    <div className="details">
                                        <span>
                                            <b>Product:</b> {product.title}
                                        </span>
                                        <span>
                                            <b>ID:</b> {product.id}
                                        </span>
                                        <ProductColor color={product.color} />
                                        <span>
                                            <b>Size:</b> {product.size}
                                        </span>
                                    </div>
                                </div>
                                <div className="priceDetails">
                                    <div className="productAmountContainer">
                                        <div className="productAmount">{product.quantity}</div>
                                    </div>
                                    <div className="productPrice">$ {product.price * product.quantity}</div>
                                </div>
                            </div>
                        ))
                        }
                        <Hr />
                    </div>
                    <div className="summary">
                        <h1>ORDER SUMMARY</h1>
                        <SummaryItem>
                            <span>Subtotal</span>
                            <span>${cart.total}</span>
                        </SummaryItem>
                        <SummaryItem>
                            <span>Estimated Shipping</span>
                            <span>$ 5.90</span>
                        </SummaryItem>
                        <SummaryItem>
                            <span>Shipping Discount</span>
                            <span>$ -5.90</span>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <span>Total</span>
                            <span>$ {cart.total}</span>
                        </SummaryItem>
                        <Link to='/pay'>
                            <button className="checkoutBtn">CHECKOUT NOW</button>

                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;