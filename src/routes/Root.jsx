import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { useState } from "react";

export default function Root() {
  const [itemQuantities, setItemQuantities] = useState({});
  const [totalItems, setTotalItems] = useState(0);
  return (
    <div className=''>
      <Header totalItems={totalItems} />
      <Outlet context={{ itemQuantities, setItemQuantities, setTotalItems }} />
    </div>
  );
}
