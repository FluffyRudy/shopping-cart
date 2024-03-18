export default function ItemNotFound({ color = "white" }) {
  return (
    <div
      className='flex justify-center items-center'
      style={{ width: "100vw", height: "50vh" }}>
      <p
        className='font-extrabold font-rock text-5xl'
        style={{ color: color }}>
        items not found
      </p>
    </div>
  );
}
