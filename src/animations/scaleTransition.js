import { useSpring, config } from "@react-spring/web";
import { choice } from "../utils/random";

export function scaleTransition() {
  const origin =  ["top left", "top right", "bottom left", "bottom right"];
  const styles = useSpring({
    from: { scale: 0 },
    to: { scale: 1 },
    config: {
      ...config.gentle,
      clamp: true,
    }
  });

  return {...styles, transformOrigin: choice(origin)};
}
