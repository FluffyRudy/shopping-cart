import { animated } from "@react-spring/web";
import { BouncingDots } from "../animations/bouncing";

export default function LoadingWidget() {
  const bounceAnimation1 = BouncingDots(0);
  const bounceAnimation2 = BouncingDots(200);
  const bounceAnimation3 = BouncingDots(400);
  return (
    <div
      style={{
        display: "flex",
        width: "40vw",
        height: "85vh",
        margin: "auto",
        gap: "1vmax",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <animated.div
        style={{
          ...bounceAnimation1,
          width: "2vmax",
          height: "2vmax",
          backgroundColor: "lime",
          borderRadius: "50%",
        }}></animated.div>
      <animated.div
        style={{
          ...bounceAnimation2,
          width: "2vmax",
          height: "2vmax",
          backgroundColor: "lime",
          borderRadius: "50%",
        }}></animated.div>
      <animated.div
        style={{
          ...bounceAnimation3,
          width: "2vmax",
          height: "2vmax",
          backgroundColor: "lime",
          borderRadius: "50%",
        }}></animated.div>
    </div>
  );
}
