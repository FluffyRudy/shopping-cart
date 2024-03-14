import { useState, useEffect } from "react";
import { getUUID } from "../utils/random";
import LoadingWidget from "../components/Loading";
import { useOutletContext } from "react-router-dom";

export default function Shop() {
  const [isFetched, setIsfetched] = useState(false);
  const [fetchedData, setFetchedData] = useState([]);
  const { itemQuantities, setItemQuantities, setTotalItems } =
    useOutletContext();

  function handleItemQuentity(itemID, increment) {
    setItemQuantities((prevQuantities) => {
      const oldQuantity = prevQuantities[itemID] || 0;
      const newQuantity = oldQuantity + (increment ? 1 : -1);
      return { ...prevQuantities, [itemID]: Math.max(newQuantity, 0) };
    });
    setTotalItems((prevQuantity) =>
      Math.max(increment ? prevQuantity + 1 : prevQuantity - 1, 0)
    );
  }

  useEffect(() => {
    if (isFetched) return;
    const requestData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (response.ok && response.status === 200) {
          const data = await response.json();
          setFetchedData(data);
          setIsfetched(true);
        } else {
          setIsfetched(true);
        }
      } catch {
        console.error("Failed to fetch data");
        setIsfetched(true);
      }
    };
    requestData();
  }, [fetchedData, isFetched]);

  if (!isFetched) return <LoadingWidget />;

  return (
    <>
      <div className='flex justify-center mb-3'>
        <input
          type='search'
          className='p-3 outline-none text-center text-2xl'
          style={{ borderRadius: "1vmin", marginRight: "1vmax" }}
        />
        <button
          style={{ borderRadius: "1vmin" }}
          className='py-3 bg-white text-black px-3 text-2xl uppercase font-poppins'>
          Search
        </button>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          columnGap: "1rem",
          rowGap: "2rem",
        }}>
        {fetchedData.map((elem) => (
          <div
            key={getUUID()}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "1vmax",
              border: "1px solid white",
              borderRadius: "1vmax",
              cursor: "pointer",
            }}>
            <img
              src={elem.image}
              alt={elem.title}
              style={{ width: "100%", objectFit: "cover", height: "300px" }}
            />
            <p
              style={{
                flex: "1",
                fontSize: "1.2em",
                textAlign: "justify",
                margin: "1vmax 0",
                fontFamily: "Poppins",
              }}>
              {elem.title}
            </p>
            <div className='flex text-2xl w-full font-bold justify-around'>
              <p className='flex-1 bg-yellow-500 text-black text-center'>
                ${elem.price}
              </p>
              <button className='font-extrabold flex-1'>Add</button>
              <div
                className='flex flex-1 justify-around'
                style={{
                  border: "1px solid #fff",
                  borderRadius: "1vmin",
                }}>
                <button
                  className='bg-green-500 flex-1'
                  style={{ borderRadius: "1vmin" }}
                  onClick={() => handleItemQuentity(elem.id, false)}>
                  -
                </button>
                <p className='flex-1 text-center'>
                  {itemQuantities[elem.id] || 0}
                </p>
                <button
                  className='bg-green-500 flex-1'
                  style={{ borderRadius: "1vmin" }}
                  onClick={() => handleItemQuentity(elem.id, true)}>
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
