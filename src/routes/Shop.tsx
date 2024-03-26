import { useState, useEffect } from "react";
import { getUUID } from "../utils/random";
import { useOutletContext } from "react-router-dom";
import axios from "axios";
import Fuse from "fuse.js";
import LoadingWidget from "../components/Loading";
import ShopSuggestion from "../components/ShopSuggestion";
import ItemNotFound from "../components/ItemNotFound";
import QuantityAdjuster from "../components/quantityAdjuster";
import CardPreview from "../components/CardPreview";
import { CarDPreviewInfo, OutletProps, ResponseObject } from "types/interfaces";

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
    totalPrice,
    setTotalPrice,
    displayClickSuggestion,
    setDisplayClickSuggestion,
  }: OutletProps = useOutletContext();
  const [category, setCategory] = useState<Array<string>>([]);
  const [matchedQuery, setMatchedQuery] = useState<Array<string>>([""]);
  const [previewCard, setPreviewCard] = useState<boolean>(false);
  const [previewCardInfo, setPreviewCardInfo] = useState<CarDPreviewInfo>();
  const [isFirstRender, setIsFirstRender] = useState<boolean>(true);

  function fetchSearchData(): void {
    setMatchedQuery(() => []);
    if (category.length === 0 || query.trim().length === 0) {
      setMatchedQuery([""]);
      setIsfetched(false);
      return;
    }
    const options = {
      includeScore: true,
      threshold: 0.3,
      includeMatches: true,
    };

    try {
      const fuseCategory = new Fuse(category, options);
      const matchedResult = fuseCategory.search(query);
      setMatchedQuery(() =>
        matchedResult.length > 0 ? matchedResult.map((elem) => elem.item) : []
      );
    } catch (error) {
      console.error(error);
    }
    setIsfetched(false);
  }

  useEffect(() => {
    const requestedCategory = async (): Promise<void> => {
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
    const request = async (query: string): Promise<ResponseObject | []> => {
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
        return [];
      }
    };
    if (matchedQuery.length === 0) setIsfetched(true);
    Promise.allSettled(
      matchedQuery.map((elem) => {
        return request(encodeURIComponent(elem));
      })
    ).then((result) => {
      setFetchedData([]);
      result.forEach((elem) => {
        if (elem.status === "fulfilled" && elem.value !== null) {
          setFetchedData((prevData) => [
            ...(Array.isArray(elem.value) ? elem.value : []),
            ...prevData,
          ]);
          setIsfetched(true);
          setQuery("");
        }
      });
    });
  }, [isFetched, matchedQuery]);

  if (!isFetched) return <LoadingWidget />;
  if (displayClickSuggestion)
    return (
      <ShopSuggestion setDisplayClickSuggestion={setDisplayClickSuggestion} />
    );
  return (
    <>
      <div className='flex justify-center mb-3'>
        <input
          placeholder='men, electronics, cloth'
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              fetchSearchData();
            }
          }}
          onChange={(e) => setQuery(e.target.value)}
          type='search'
          className='outline-none  focus:p-0 text-center'
          style={{
            borderRadius: "1vmin",
            marginRight: "1vmax",
            padding: "1vmax",
          }}
        />
        <button
          onClick={() => fetchSearchData()}
          style={{ borderRadius: "1vmin", fontSize: "min(2em, 2vmin)" }}
          className='py-3 bg-white text-black px-3 uppercase '>
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
                const target = e.target as Element;
                if (target.nodeName === "BUTTON") return;
                const previewInfo = {
                  title: elem.title,
                  price: elem.price,
                  image: elem.image,
                  category: elem.category,
                  description: elem.description,
                } as CarDPreviewInfo;
                setPreviewCardInfo(previewInfo);
                setPreviewCard(!previewCard);
                setIsFirstRender(false);
              }}
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
                loading='lazy'
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
                  totalPrice={totalPrice}
                  setTotalPrice={setTotalPrice}
                />
              </div>
            </div>
          ))
        ) : (
          <ItemNotFound />
        )}
      </div>
      {!isFirstRender && (
        <CardPreview
          previewCardInfo={previewCardInfo!}
          setPreviewCard={setPreviewCard}
          previewCard={previewCard}
        />
      )}
    </>
  );
}
