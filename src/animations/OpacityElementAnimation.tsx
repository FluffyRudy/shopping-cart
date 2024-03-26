import { useSpring, animated } from "@react-spring/web";

export default function opacityTransition({
  children,
}: {
  children: React.JSX.Element;
}) {
  const animation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return <animated.div style={animation}>{children}</animated.div>;
}
