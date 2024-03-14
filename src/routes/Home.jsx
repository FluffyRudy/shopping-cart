import { animated } from "@react-spring/web";
import { transitionAnimation } from "../animations/transition";

export default function Home() {
  const hrTransitionAnimation = transitionAnimation();
  return (
    <animated.div
      className='home-intro h-full w-3/5 m-auto flex flex-col justify-around items-center'
      style={{
        ...hrTransitionAnimation,
        width: "min(700px, 80vw)",
        height: "60vh",
        marginTop: "10vh",
      }}>
      <h1 className='uppercase font-extrabold font-rock text-3xl'>
        why supercart ?
      </h1>
      <p className='font-bold text-2xl font-rock text-justify'>
        Welcome to our online store, where we invite you to to discover a wide
        range of quality products from the comfort of your home. We prioritize
        your security, ensuring a secure shopping experience while offering 24/7
        customer support for any queries. Not satisfied with your purchase? Our
        easy return and refund policy ensures your satisfaction. Don’t forget to
        sign up for exclusive offers and be the first to know about our deals.
        Happy shopping!
      </p>
    </animated.div>
  );
}
