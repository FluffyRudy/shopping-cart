import { useSpring, config } from "@react-spring/web";

export function visibilityTransition() {
  const styles = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: config.gentle
  });

  return styles;
}
