import { useSpring } from "@react-spring/web";
import { choice } from "../utils/random";

export function HorizontalTransition() {
    const startDist = choice([-150, 150]);
    const endDist   = 0;
    const dirX      = choice([true, false])

    if (dirX) {
        return useSpring({
            from: { x: startDist, opacity: 0 },
            to: { x: endDist, opacity: 1 },
            config: {
              duration: 600,
              clamp: false
            }
          });
    }
    return useSpring({
        from: { y: startDist, opacity: 0 },
        to: { y: endDist, opacity: 1 },
        config: {
          duration: 600,
          clamp: false
        }
      });

}