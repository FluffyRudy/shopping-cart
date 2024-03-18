import { useOutletContext } from "react-router-dom";
import ItemNotFound from "../components/ItemNotFound";
import { animated, useScroll } from "@react-spring/web";
import QuantityAdjuster from "../components/quantityAdjuster";
import { scaleTransition } from "../animations/scaleTransition";
import { useState } from "react";

export default function Cart() {
  const animation = scaleTransition(true);
  const [displayPurchasedScreen, setDisplayPurchasedScreen] = useState(false);
  const {
    handleItemQuentity,
    itemQuantities,
    setItemQuantities,
    setTotalItems,
    totalPrice,
    setTotalPrice,
  } = useOutletContext();

  function handleRemoveItem(itemID) {
    const newItemQuantities = { ...itemQuantities };
    const deductionPrice =
      newItemQuantities[itemID][0] * newItemQuantities[itemID][1];
    delete newItemQuantities[itemID];

    setItemQuantities(newItemQuantities);

    const newTotalItems = Object.values(newItemQuantities).reduce(
      (total, qty) => total + qty[0],
      0
    );

    setTotalItems(newTotalItems);
    setTotalPrice((prevPrice) => prevPrice - deductionPrice);
  }

  return Object.keys(itemQuantities).length > 0 ? (
    <>
      <animated.div
        style={{
          ...animation,
          display: "flex",
          flexWrap: "wrap",
          borderRadius: "1vmax",
          padding: "2vmin 0",
          justifyContent: "center",
        }}>
        {Object.entries(itemQuantities).map(([itemID, value]) => {
          if (value[0] <= 0) return null;
          return (
            <div
              key={itemID}
              className='capitalize  text-justify rounded-md'
              style={{
                maxHeight: "fit-content",
                border: "2px solid grey",
              }}>
              <div
                className='flex justify-around  mb-5'
                style={{
                  width: "min(500px, 100vw)",
                  height: "300px",
                  eight: "300px",
                  padding: "0 1vmax",
                  gap: "1vmin",
                }}>
                <img
                  style={{
                    width: "150px",
                    height: "150px",
                    alignSelf: "center",
                  }}
                  src={value[2]}
                  alt=''
                />
                <div
                  style={{
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1vmax",
                    height: "100%",
                    width: "40%",
                  }}>
                  <p
                    className='text-left font-extrabold my-1'
                    style={{
                      fontSize: "min(1.5em, 5vmin)",
                    }}>
                    {itemID}
                  </p>
                  <p className='bg-yellow-500 text-black text-center'>
                    ${(value[1] * value[0]).toFixed(2)}
                  </p>
                  <div className=''>
                    <QuantityAdjuster
                      elem={{ title: itemID, price: value[1], image: value[2] }}
                      handleItemQuentity={handleItemQuentity}
                      itemQuantities={itemQuantities}
                      setItemQuantities={setItemQuantities}
                      setTotalItems={setTotalItems}
                      totalPrice={totalPrice}
                      setTotalPrice={setTotalPrice}
                    />
                  </div>
                  <button
                    onClick={() => handleRemoveItem(itemID)}
                    className='bg-red-500 text-white rounded-full font-extrabold box-border'
                    style={{ height: "40px", fontSize: "2.5vmin" }}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </animated.div>
      <div
        className='sticky bottom-0 price-counter text-black text-center font-extrabold rounded-sm'
        style={{ width: "min(200px, 100vw)", margin: "auto" }}>
        <p className='py-3 rounded-md bg-yellow-500'>
          Total Price: ${totalPrice.toFixed(2)}
        </p>
      </div>
    </>
  ) : (
    <div className='flex w-full justify-center items-center'>
      <ItemNotFound color='red' />
    </div>
  );
}
