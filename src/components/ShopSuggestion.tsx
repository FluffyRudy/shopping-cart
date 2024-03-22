import { animated } from "@react-spring/web";
import { opacityTransition } from "../animations/opacityTransition";
import { setState } from "types/types";

export default function ShopSuggestion({
  setDisplayClickSuggestion,
}: {
  setDisplayClickSuggestion: setState<boolean>;
}) {
  const animation = opacityTransition();
  return (
    <animated.div
      className='flex justify-center text-center items-center gap-2 flex-col'
      style={{ ...animation, width: "100vw", height: "100vh" }}>
      <h1 className='text-red-300 text-3xl font-extrabold'>
        Click on cards for description
      </h1>
      <button
        className='rounded-sm bg-white text-black font-bold px-3 py-2'
        onClick={() => setDisplayClickSuggestion(false)}>
        Got It
      </button>
    </animated.div>
  );
}
