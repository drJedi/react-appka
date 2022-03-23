import React from "react";
import { Link } from "react-router-dom";
import Product from "../components/Product";
const ProductPage = ({ match }) => {
  return (
    <>
      <div>Strona Produktu</div>
      <Product />
      <Link to="/products">Powrót do listy produktów</Link>
    </>
  );
};

export default ProductPage;
