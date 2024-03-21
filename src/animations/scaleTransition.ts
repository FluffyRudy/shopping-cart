import { useSpring, config } from "@react-spring/web";
import { SpringAnimationTypes } from "types/types";

export function scaleTransition(
  isOpen: boolean,
  origin = "center"
): SpringAnimationTypes.ScaleAnimation {
  const styles = useSpring({
    from: { scale: isOpen ? 0 : 1 },
    to: { scale: isOpen ? 1 : 0 },
    config: {
      ...config.gentle,
      clamp: true,
    },
  });

  return { ...styles, transformOrigin: origin };
}
