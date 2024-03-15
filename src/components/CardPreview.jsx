export default function CardPreview({ props }) {
  const { previewCardInfo, setPreviewCard } = props;
  return (
    <div
      style={{
        width: "min(400px, 90vw)",
        height: "500px",
        overflow: "auto",
        position: "fixed",
        top: "50vh",
        left: "50vw",
        transform: "translate(-50%, -50%)",
        border: "2px solid white",
        borderRadius: "1vmax",
      }}>
      <div
        className='capitalize flex flex-col  items-center  text-justify rounded-md'
        style={{
          backgroundColor: "black",
          height: "auto",
        }}>
        <button
          onClick={() => setPreviewCard(false)}
          className='absolute right-2 top-1'
          style={{ fontSize: "1.5em", color: "red" }}>
          ❌
        </button>
        <p
          className='text-center w-4/5 font-extrabold my-1'
          style={{ fontSize: "min(1.5em, 3vmax)", lineHeight: "3vmax" }}>
          {previewCardInfo.title}
        </p>
        <img
          style={{
            width: "250px",
            height: "auto",
            objectFit: "fill",
            margin: "auto",
          }}
          src={previewCardInfo.image}
          alt=''
        />
        <p className='font-extrabold  my-1'>{previewCardInfo.category}</p>
        <p className='normal-case w-4/5 font-semibold'>
          {previewCardInfo.description}
        </p>
        <p className='font-semibold bg-yellow-500 text-black w-full text-center mt-3 rounded-md'>
          ${previewCardInfo.price}
        </p>
      </div>
    </div>
  );
}
