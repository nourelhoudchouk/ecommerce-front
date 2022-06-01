import { Link } from "react-router-dom"
import { Snackbar } from "@mui/material";
import { useState } from "react";



const Payment = () => {
    const [open, setOpen] = useState(false);
    const pay = () => {
        setOpen(true);
        <Link to={'/'}>
        </Link>
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div>
            <div className="container">
                <br></br>
                <div className="payCard">
                    <br></br>
                    <h3>Billing Address</h3>
                    <div className="payItem">
                        <label > Full Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="John M. Doe" />
                    </div>
                    <div className="payItem">
                        <label >Email</label>
                        <input type="text" id="email" name="email" placeholder="john@example.com" />
                    </div>

                    <div className="payItem"><label > Address</label>
                        <input type="text" id="adr" name="address" placeholder="542 W. 15th Street" />
                    </div>
                    <div className="payItem">
                        <label > City</label>
                        <input type="text" id="city" name="city" placeholder="New York" /></div>
                </div >
                <div className="payCard">
                    <br></br>
                    <h3>Credit Card </h3>
                    <div className="payItem">
                        <label > Full Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="John M. Doe" />
                    </div>
                    <div className="payItem">
                        <label >Card Number</label>
                        <input type="text" id="email" name="email" placeholder="Your card number" />
                    </div>

                    <div className="payItem"><label > Expiration</label>
                        <input type="text" id="adr" name="address" placeholder="MM/YY" />
                    </div>
                    <div className="payItem">
                        <label > CVV</label>
                        <input type="text" id="city" name="city" placeholder="CVV" />
                    </div>

                    <button className="checkoutBtn" onClick={pay}>Pay now</button>

                    <Snackbar
                        open={open}
                        autoHideDuration={5000}
                        message="Payment succeeded! Thank you for your trust"
                        onClose={handleClose}
                    />

                </div >

            </div>


        </div>
    )
}

export default Payment