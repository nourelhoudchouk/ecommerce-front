
import { Link, useLocation } from "react-router-dom";
import Products from "../components/Products/Products";


const ProducstList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    return (
        <div>
            <h1 style={{ margin: '20px' }}>{cat}</h1>
            <div className="filterContainer">
                <Link to={'/'}>
                    <button className="topButton">CONTINUE SHOPPING</button>
                </Link>

                <div style={{ margin: '20px' }}>
                    <span className="filterText">Sort Products:</span>
                    <select className="select" >
                        <option defaultChecked>Newest</option>
                        <option>Price (asc)</option>
                        <option>Price (desc)</option>
                    </select>
                </div>
            </div>
            <Products cat={cat}/>
        </div>
    );
};

export default ProducstList;