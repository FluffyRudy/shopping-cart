import { setState } from "types/types";
import OpacityElementAnimation from "../animations/OpacityElementAnimation";

export default function ShopSuggestion({
  setDisplayClickSuggestion,
}: {
  setDisplayClickSuggestion: setState<boolean>;
}) {
  return (
    <OpacityElementAnimation>
      <div
        className='flex justify-center text-center items-center gap-2 flex-col'
        style={{ width: "100vw", height: "100vh" }}>
        <h1 className='text-red-300 text-3xl font-extrabold'>
          Click on cards for description
        </h1>
        <button
          className='rounded-sm bg-white text-black font-bold px-3 py-2'
          onClick={() => setDisplayClickSuggestion(false)}>
          Got It
        </button>
      </div>
    </OpacityElementAnimation>
  );
}
