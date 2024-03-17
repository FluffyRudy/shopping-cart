import { useState, useEffect } from "react";
import { getUUID } from "../utils/random";
import LoadingWidget from "../components/Loading";
import { useOutletContext } from "react-router-dom";
import ItemNotFound from "../components/ItemNotFound";
import QuantityAdjuster from "../components/quantityAdjuster";
import CardPreview from "../components/CardPreview";
import axios from "axios";

export default function Shop() {
  const {
    itemQuantities,
    setItemQuantities,
    query,
    setQuery,
    isFetched,
    setIsfetched,
    fetchedData,
    setFetchedData,
    handleItemQuentity,
    setTotalItems,
  } = useOutletContext();
  const [category, setCategory] = useState([]);
  const [matchedQuery, setMatchedQuery] = useState([query]);
  const [previewCard, setPreviewCard] = useState(false);
  const [previewCardInfo, setPreviewCardInfo] = useState("");
  const [hasAnimated, setHasAnimated] = useState(false);

  function fetchSearchData() {
    setMatchedQuery([]);
    if (category.length === 0 || query.trim().length === 0) {
      setMatchedQuery([""]);
      setIsfetched(false);
      return;
    }
    const matchedQuery = [];
    const tobeMatched = new RegExp(query, "i");
    for (let elem of category) {
      if (elem.match(tobeMatched)) matchedQuery.push(elem);
    }
    if (matchedQuery.length > 0) {
      setMatchedQuery(matchedQuery);
      setIsfetched(false);
    }
  }

  useEffect(() => {
    const requestedCategory = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/categories"
        );
        if (response.ok && response.status === 200) {
          const category = await response.json();
          setCategory(category);
        } else {
          throw "Faild to create categories";
        }
      } catch (error) {
        console.error(error);
      }
    };
    requestedCategory();
  }, []);

  useEffect(() => {
    if (isFetched) return;
    const request = async (query) => {
      const url =
        query.trim().length > 0
          ? "https://fakestoreapi.com/products/category/" + query
          : "https://fakestoreapi.com/products/";
      try {
        const response = await axios.get(url);
        if (response.status === 200) {
          const result = response.data;
          return result;
        } else {
          throw "Faild to fetch resources";
        }
      } catch (error) {
        console.error(error);
      }
    };

    Promise.allSettled(
      matchedQuery.map((elem) => {
        return request(encodeURIComponent(elem));
      })
    ).then((result) => {
      setFetchedData([]);
      result.forEach((elem) => {
        if (elem.status === "fulfilled") {
          setFetchedData((prevData) => [...elem.value, ...prevData]);
          setIsfetched(true);
          setQuery("");
        }
      });
    });
  }, [isFetched]);

  if (!isFetched) return <LoadingWidget />;
  return (
    <>
      <div className='flex justify-center mb-3'>
        <input
          placeholder='All'
          onChange={(e) => setQuery(e.target.value)}
          type='search'
          className='outline-none text-center'
          style={{ borderRadius: "1vmin", marginRight: "1vmax" }}
        />
        <button
          onClick={() => fetchSearchData()}
          style={{ borderRadius: "1vmin", fontSize: "min(2em, 2vmin)" }}
          className='py-3 bg-white text-black px-3 uppercase font-poppins'>
          Search
        </button>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          columnGap: "1rem",
          rowGap: "2rem",
        }}>
        {fetchedData.length > 0 ? (
          fetchedData.map((elem) => (
            <div
              onClick={(e) => {
                if (e.target.nodeName === "BUTTON") return;
                setPreviewCardInfo(elem);
                setPreviewCard(!previewCard);
              }}
              key={getUUID()}
              className='item-card'
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
                <QuantityAdjuster
                  elem={elem}
                  handleItemQuentity={handleItemQuentity}
                  itemQuantities={itemQuantities}
                  setItemQuantities={setItemQuantities}
                  setTotalItems={setTotalItems}
                />
              </div>
            </div>
          ))
        ) : (
          <ItemNotFound />
        )}
      </div>
      {previewCard && (
        <CardPreview props={{ previewCardInfo, setPreviewCard }} />
      )}
    </>
  );
}
