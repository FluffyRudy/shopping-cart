import { useSpring, config } from "@react-spring/web";
import { animated } from "@react-spring/web";

export default function ScaleTransition({
  children,
  isOpen,
  origin = "center",
  customStyle = {},
}: {
  children: React.JSX.Element;
  isOpen: boolean;
  origin: string;
  customStyle: object;
}) {
  const animation = useSpring({
    from: { scale: isOpen ? 0 : 1 },
    to: { scale: isOpen ? 1 : 0 },
    config: {
      ...config.gentle,
      clamp: false,
    },
  });

  return (
    <animated.div
      style={{
        ...animation,
        ...customStyle,
        transformOrigin: origin,
      }}>
      {children}
    </animated.div>
  );
}
