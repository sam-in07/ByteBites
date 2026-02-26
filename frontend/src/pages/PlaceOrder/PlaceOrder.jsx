import React from "react";
import "./PlaceOrder.css";
const PlaceOrder = () => {
  return (
    <form action="" className="place-order">
      <div className="place-order-left">
        <p className="title"> Delivery Details</p>
        <div className="multi-fields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="text" placeholder="Email Address" />
        <input type="text" placeholder="Address" />
        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip Code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone Number" />
      </div>
      <div className="place-order-right">

      </div>
    </form>
  );
};

export default PlaceOrder;
