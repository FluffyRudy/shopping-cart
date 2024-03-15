import { useSpring } from "@react-spring/web";

export function BouncingDots(delay = 0) {
  const styles = useSpring({
    from: { y: 0 },
    to: { y: 10 },
    config: { tension: 100, friction: 0 },
    loop: { reverse: true },
    delay: delay,
  });

  return styles;
}