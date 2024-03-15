export default function QuantityAdjuster({
  elem,
  handleItemQuentity,
  itemQuantities,
}) {
  return (
    <>
      <button
        className='bg-green-500 flex-1'
        style={{ borderRadius: "1vmin" }}
        onClick={() => handleItemQuentity(elem.title, false)}>
        -
      </button>
      <p className='flex-1 text-center'>{itemQuantities[elem.title] || 0}</p>
      <button
        className='bg-green-500 flex-1'
        style={{ borderRadius: "1vmin" }}
        onClick={() => handleItemQuentity(elem.title, true)}>
        +
      </button>
    </>
  );
}
