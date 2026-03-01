import React from "react";
import "./Add.css";
import { assets } from "../../assets/assets";
const Add = () => {
  return (
    <div>
      <div className="add">
        <form action="" className="flex-col">
          <div className="add-img-upload flex col">
            <p>Upload Image</p>
            <label htmlFor="image">
              <img src={assets.upload_area} alt="" />
            </label>
            <input type="file" id="image" hidden required />
          </div>
          <div className="add-product-name flex col">
            <p>Product Name</p>
            <input type="text" placeholder="Product Name" required />
          </div>
          <div className="add-product-description flex col">
            <p>Product Description</p>
            <textarea
              name="Description"
              rows="6"
              placeholder="Write content here"
              required
            />
          </div>
          <div className="add-catagory-price">
            <div className="add-product-catagory flex col">
              <p>Product Catagory</p>
              <select name="catagory">
                <option value="Salad">Salad</option>
                <option value="Rolls">Rolls</option>
                <option value="Deserts">Deserts</option>
                <option value="Sandwich">Sandwich</option>
                <option value="Cake">Cake</option>
                <option value="Pure Veg">Pure Veg</option>
                <option value="Pasta">Pasta</option>
                <option value="Noodels">Noodels</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
