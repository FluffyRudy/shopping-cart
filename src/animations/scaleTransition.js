import { useSpring, config } from "@react-spring/web";

export function scaleTransition(isOpen) {
  const styles = useSpring({
    from: { scale: isOpen ? 0 : 1 },
    to: { scale: isOpen ? 1 : 0 },
    config: {
      ...config.gentle,
      clamp: true,
    }
  });

  return {...styles, transformOrigin: "top left"};
}
