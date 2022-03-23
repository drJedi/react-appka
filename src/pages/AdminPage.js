import React from "react";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  let navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/login")}>Change to login page</button>
    </div>
  );
};

export default AdminPage;
