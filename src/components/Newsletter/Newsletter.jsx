import { Send } from "@mui/icons-material";
import './Newsletter.css'
const Newsletter = () => {
  return (
    <div className="newsletter">
      <h1 className="newsTitle">Newsletter</h1>
      <div className="newsSubTitle">Get timely updates from your favorite products.</div>
      <div className="inputContainer">
        <input className="newsInput" placeholder="Your email" />
        <button className="newsbtn">
          <Send />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;