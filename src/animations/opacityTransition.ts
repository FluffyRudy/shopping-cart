import { useSpring } from "@react-spring/web";
import { SpringAnimationTypes } from "types/types";

export function opacityTransition(): SpringAnimationTypes.OpacityAnimation {
  const styles = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return styles;
}
