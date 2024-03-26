import { CarDPreviewInfo } from "types/interfaces";
import { setState } from "types/types";
import ScaleTransitionAnimation from "../animations/ScaleTransitionAnimation";

export default function CardPreview({
  previewCardInfo,
  setPreviewCard,
  previewCard,
}: {
  previewCardInfo: CarDPreviewInfo;
  setPreviewCard: setState<boolean>;
  previewCard: boolean;
}) {
  return (
    <ScaleTransitionAnimation
      isOpen={previewCard}
      origin='center'
      customStyle={{
        overflow: "auto",
        position: "fixed",
        top: "50vh",
        left: "50vw",
        translateX: "-50%",
        translateY: "-50%",
        border: "2px solid white",
        borderRadius: "1vmax",
      }}>
      <div style={{ width: "min(400px, 90vw)", height: "500px" }}>
        <div
          className='capitalize flex flex-col  items-center   text-justify rounded-md'
          style={{
            backgroundColor: "black",
            minHeight: "100%",
          }}>
          <button
            onClick={() => setPreviewCard(false)}
            className='absolute right-2 top-1 opacity-80 hover:opacity-100'
            style={{ fontSize: "1.5em", color: "red" }}>
            ❌
          </button>
          <p
            className='font-extrabold my-1'
            style={{
              fontSize: "min(1em, 2.3vmin)",
              lineHeight: "3vmax",
              width: "250px",
            }}>
            {previewCardInfo.title}
          </p>
          <hr style={{ width: "100%", margin: "1vmax 0" }} />
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
          <hr style={{ width: "60%", margin: "1vmax 0" }} />
          <p className='font-extrabold  my-1'>{previewCardInfo.category}</p>
          <hr style={{ width: "60%", margin: "1vmax 0" }} />
          <p className='normal-case w-4/5 font-semibold'>
            {previewCardInfo.description}
          </p>
          <p className='font-semibold bg-yellow-500 text-black w-full text-center mt-3'>
            ${previewCardInfo.price}
          </p>
        </div>
      </div>
    </ScaleTransitionAnimation>
  );
}
