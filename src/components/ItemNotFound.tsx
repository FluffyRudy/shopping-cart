export default function ItemNotFound({ color = "white" }) {
  return (
    <div
      className='flex justify-center items-center'
      style={{ width: "100vw", height: "50vh" }}>
      <p
        className='font-extrabold text-5xl text-center'
        style={{ color: color }}>
        items not found
      </p>
    </div>
  );
}
