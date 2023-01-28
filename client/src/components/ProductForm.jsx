import React from "react";
import { Link } from "react-router-dom";

const ProductForm = ({ product, productHandler, imageHandler, submitHandler, btn}) => {
  return (
    <>
      <div className="container">
        <div className="row mt-4">
          <Link className="btn btn-primary" to={`/admin`}>
            Go Back
          </Link>
        </div>
        <div className="row mt-4">
          <div className="col-lg-6">
            <form onSubmit={submitHandler}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Product Name"
                  value={product.name}
                  onChange={productHandler}
                />
              </div>
              <div className="form-group">
                <div className="custom-file">
                  <input
                    type="file"
                    name="image"
                    className="custom-file-input"
                    id="customFile"
                    onChange={imageHandler}
                  />
                  <label htmlFor="customFile" className="custom-file-label">
                    Add Image
                  </label>
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="price"
                  className="form-control"
                  placeholder="Product Price"
                  value={product.price}
                  onChange={productHandler}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="qty"
                  className="form-control"
                  placeholder="Quantity"
                  value={product.qty}
                  onChange={productHandler}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="info"
                  className="form-control"
                  placeholder="Product Info"
                  value={product.info}
                  onChange={productHandler}
                />
              </div>
              <input type="submit" value={btn} className="btn btn-success" />
            </form>
          </div>
          <div className="col-lg-6">
            <div className="card overflow-hidden">
              <div className="text-center">
                <img
                  src={product.image}
                  className="img-thumbnail"
                  width="400px"
                  height="400px"
                  alt="product preview"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductForm;
