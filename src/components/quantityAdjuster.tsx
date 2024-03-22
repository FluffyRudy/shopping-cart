import {
  cartItemsData,
  CarDPreviewInfo,
  ItemQuantityHandler,
} from "types/interfaces";
import { setState } from "types/types";

export default function QuantityAdjuster({
  elem,
  handleItemQuentity,
  itemQuantities,
  setItemQuantities,
  setTotalItems,
  totalPrice,
  setTotalPrice,
}: {
  elem: CarDPreviewInfo;
  handleItemQuentity: ItemQuantityHandler;
  itemQuantities: cartItemsData;
  setItemQuantities: setState<cartItemsData>;
  totalPrice: number;
  setTotalPrice: setState<number>;
  setTotalItems: setState<number>;
}) {
  return (
    <div
      className='flex flex-1 justify-around'
      style={{
        border: "1px solid #fff",
        borderRadius: "1vmin",
      }}>
      <button
        className='bg-green-500 flex-1'
        style={{ borderRadius: "1vmin" }}
        onClick={() =>
          handleItemQuentity(
            totalPrice,
            setTotalPrice,
            setTotalItems,
            itemQuantities,
            setItemQuantities,
            elem.title,
            false,
            elem.price,
            elem.image
          )
        }>
        -
      </button>
      <p className='flex-1 text-center'>
        {itemQuantities[elem.title] ? itemQuantities[elem.title][0] : 0}
      </p>
      <button
        className='bg-green-500 flex-1'
        style={{ borderRadius: "1vmin" }}
        onClick={() =>
          handleItemQuentity(
            totalPrice,
            setTotalPrice,
            setTotalItems,
            itemQuantities,
            setItemQuantities,
            elem.title,
            true,
            elem.price,
            elem.image
          )
        }>
        +
      </button>
    </div>
  );
}
