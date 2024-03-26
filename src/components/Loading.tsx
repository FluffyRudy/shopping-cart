import BouncingElementAnimation from "../animations/BouncingElementAnimation";

export default function LoadingWidget() {
  const commonStyle = {
    width: "2vmax",
    height: "2vmax",
    backgroundColor: "lime",
    borderRadius: "50%",
  };
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
      <BouncingElementAnimation delay={0}>
        <div style={commonStyle}></div>
      </BouncingElementAnimation>
      <BouncingElementAnimation delay={200}>
        <div style={commonStyle}></div>
      </BouncingElementAnimation>
      <BouncingElementAnimation delay={400}>
        <div style={commonStyle}></div>
      </BouncingElementAnimation>
    </div>
  );
}
