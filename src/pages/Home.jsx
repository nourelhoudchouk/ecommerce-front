import React from 'react'
import Categories from '../components/Categories/Categories';
import Products from '../components/Products/Products';
import '../App.css'
const Home = () => {
  return (
    <div>
      <Categories />
      <Products />
    </div>
  )
}

export default Home