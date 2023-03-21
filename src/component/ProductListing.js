import React, { useEffect, } from "react";

import { useDispatch, useSelector } from "react-redux";

import { fetchProducts} from "../redux/actions/productAction";
import ProductComponent from "./ProductComponent";

const ProductPage = () => {
 
  const dispatch = useDispatch();


  useEffect(() => {
    console.log("hi")
   dispatch(fetchProducts())
  }, []);

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductPage;