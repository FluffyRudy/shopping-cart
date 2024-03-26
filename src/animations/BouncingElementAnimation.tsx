import { animated, useSpring } from "@react-spring/web";
import React from "react";

export default function BouncingElementAnimation({
  children,
  delay = 0,
}: {
  children: React.JSX.Element;
  delay: number;
}) {
  const animation = useSpring({
    from: { y: 0 },
    to: { y: 10 },
    config: { tension: 100, friction: 0 },
    loop: { reverse: true },
    delay: delay,
  });

  return <animated.div style={animation}>{children}</animated.div>;
}
