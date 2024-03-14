import { useSpring } from "@react-spring/web";

export function BouncingDots(start, end, delay=0) {

  const styles = useSpring({
    loop: { reverse: true },
    from: { y: start },
    to: { y: end },
    config: { duration: 200 },
    delay: delay
  });

  return styles;
}
