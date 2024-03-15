import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { useState } from "react";

export default function Root() {
  const [itemQuantities, setItemQuantities] = useState({});
  const [totalItems, setTotalItems] = useState(0);
  const [query, setQuery] = useState("");
  const [isFetched, setIsfetched] = useState(false);
  const [fetchedData, setFetchedData] = useState([]);
  return (
    <div className=''>
      <Header totalItems={totalItems} />
      <Outlet
        context={{
          itemQuantities,
          setItemQuantities,
          query,
          setQuery,
          isFetched,
          setIsfetched,
          fetchedData,
          setFetchedData,
          setTotalItems,
        }}
      />
    </div>
  );
}
