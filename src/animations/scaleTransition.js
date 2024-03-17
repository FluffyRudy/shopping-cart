import { useSpring, config } from "@react-spring/web";
import { choice } from "../utils/random";

export function scaleTransition() {
  const styles = useSpring({
    from: { scale: 0 },
    to: { scale: 1 },
    config: {
      ...config.gentle,
      clamp: true,
    }
  });

  return {...styles, transformOrigin: "top left"};
}
