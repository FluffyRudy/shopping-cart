import { useSpring, config } from "@react-spring/web";

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
