import { Link } from "react-router-dom";
import "./Categories.css"

const CategoryItem = ({ item }) => {
  return (
    <div className="catItem">
      <br />
      <br />
      <img src={item.img} alt="" className="catImg" />
      <Link to={`/products/${item.cat}`}>
        <div className="catInfo">
          <h1 className="catTitle" >{item.title}</h1>
          <button className="button">SHOP NOW</button>
        </div></Link>
    </div>

  );
};

export default CategoryItem;