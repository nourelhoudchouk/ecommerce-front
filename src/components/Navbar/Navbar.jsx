import React from 'react'
import './Navbar.css'
import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import Badge from '@mui/material/Badge'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity)
    console.log(quantity)
    return (
        <div className='navbar'>
            <div className='left'>
                <div className='searchContainer' >
                    <input className='input' placeholder="Search" />
                    <Search style={{ color: "gray", fontSize: 16 }} />
                </div>
            </div>
            <div className='center'>
                <div className='logo'>TEST</div>
            </div>
            <div className='right'>
                <Link to='/cart'>
                    <div className='menuItem'>
                        <Badge color="primary" badgeContent={quantity} showZero>
                            <ShoppingCartOutlined color="action" />
                        </Badge>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Navbar