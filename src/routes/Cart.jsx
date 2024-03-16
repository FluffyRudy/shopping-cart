import { useOutletContext } from "react-router-dom";
import ItemNotFound from "../components/ItemNotFound";
import { animated } from "@react-spring/web";
import QuantityAdjuster from "../components/quantityAdjuster";

export default function Cart() {
  const {
    handleItemQuentity,
    itemQuantities,
    setItemQuantities,
    setTotalItems,
  } = useOutletContext();
  function handleRemoveItem(itemID) {
    const newItemQuantities = { ...itemQuantities };
    delete newItemQuantities[itemID];

    setItemQuantities(newItemQuantities);

    const newTotalItems = Object.values(newItemQuantities).reduce(
      (total, qty) => total + qty[0],
      0
    );
    setTotalItems(newTotalItems);
  }

  return Object.keys(itemQuantities).length > 0 ? (
    <animated.div
      style={{
        width: "min(500px, 100vw)",
        height: "60vh",
        overflow: "auto",
        margin: "auto",
        borderRadius: "1vmax",
        padding: "2vmin 0",
      }}>
      {Object.entries(itemQuantities).map(([itemID, value]) => {
        if (value[0] <= 0) return null;
        return (
          <div
            key={itemID}
            className='capitalize flex flex-col  items-center  text-justify rounded-md'
            style={{
              maxHeight: "fit-content",
              width: "100%",
              borderLeft: "2px solid grey",
              borderRight: "2px solid grey",
            }}>
            <div
              className='flex justify-between mb-5'
              style={{
                width: "100%",
                padding: "1vmax",
              }}>
              <img
                style={{
                  width: "100px",
                  height: "60%",
                  alignSelf: "center",
                }}
                src={value[2]}
                alt=''
              />
              <div
                style={{
                  alignSelf: "center",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1vmax",
                }}>
                <p
                  className='font-extrabold my-1'
                  style={{
                    fontSize: "min(1em, 2.3vmin)",
                    lineHeight: "3vmax",
                    width: "250px",
                  }}>
                  {itemID}
                </p>
                <p className='font-semibold'>Price: ${value[1]}</p>
                <QuantityAdjuster
                  elem={{ title: itemID, price: value[1], image: value[2] }}
                  handleItemQuentity={handleItemQuentity}
                  itemQuantities={itemQuantities}
                  setItemQuantities={setItemQuantities}
                  setTotalItems={setTotalItems}
                />
                <button
                  onClick={() => handleRemoveItem(itemID)}
                  className='bg-red-500 text-white rounded-full'>
                  Remove
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </animated.div>
  ) : (
    <ItemNotFound />
  );
}
