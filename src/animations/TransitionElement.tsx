import { animated, useSpring } from "@react-spring/web";
import { choice } from "../utils/random";
import React from "react";

export default function TransitionAnimation({
  children,
}: {
  children: React.JSX.Element;
}) {
  const startDist = choice<number>([-150, 150]);
  const endDist = 0;
  const dirX = choice([true, false]);
  const config = {
    duration: 600,
    clamp: false,
  };

  const direction = dirX ? "x" : "y";

  const animation = useSpring({
    from: { [direction]: startDist, opacity: 0 },
    to: { [direction]: endDist, opacity: 1 },
    config: config,
  });

  return <animated.div style={animation}>{children}</animated.div>;
}
