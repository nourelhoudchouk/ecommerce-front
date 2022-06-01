
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";


const Product = ({ item }) => {
  return (
    <div className="prodItem">
      <div className="prodCircle" />
      <img alt="" src={item.img} className="prodImg" />
      <div className="prodInfo">
        <div className="prodIcon">
          <ShoppingCartOutlined />
        </div>
        <Link to={`/product/${item._id}`}>
          <div className="prodIcon">
            <SearchOutlined />
          </div>
        </Link>
        <div className="prodIcon">
          <FavoriteBorderOutlined />
        </div>
      </div>
    </div>
  );
};

export default Product;