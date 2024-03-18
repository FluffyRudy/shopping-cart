import { useSpring } from "@react-spring/web";

export function opacityTransition() {
  const styles = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return styles;
}