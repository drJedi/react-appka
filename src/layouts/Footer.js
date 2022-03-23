import React from "react";
import { useLocation } from "react-router-dom";
function Footer() {
  let { pathname } = useLocation();
  return (
    <div>
      <h2>Stopka</h2>
      <h2>To jest strona: {pathname}</h2>
      <p>{pathname}</p>
    </div>
  );
}

export default Footer;
