import { useSpring } from "@react-spring/web";
import { SpringAnimationTypes } from "types/types";

export function BouncingDots(
  delay = 0
): SpringAnimationTypes.BouncingAnimation {
  const styles = useSpring({
    from: { y: 0 },
    to: { y: 10 },
    config: { tension: 100, friction: 0 },
    loop: { reverse: true },
    delay: delay,
  });

  return styles;
}
