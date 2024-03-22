import { SpringValue } from "@react-spring/web";

export type setState<T> = React.Dispatch<React.SetStateAction<T>>;

export namespace SpringAnimationTypes {
  export type OpacityAnimation = { opacity: SpringValue<number> };
  export type LinearDisplacemenOpacityAnimation = {
    x?: SpringValue<number>;
    y?: SpringValue<number>;
    opacity: SpringValue<number>;
  };
  export type ScaleAnimation = {
    scale: SpringValue<number>;
    transformOrigin?: string;
  };
  export type BouncingAnimation = {
    y: SpringValue<number>;
  };
}
