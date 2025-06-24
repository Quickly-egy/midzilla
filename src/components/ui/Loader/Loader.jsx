import Lottie from "lottie-react";
import animationData from "../../../assets/Animation - 1750342437174.json";

const Loader = ({ size = 300, backgroundColor = "white" }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: backgroundColor,
        zIndex: 9999,
        overflow: "hidden",
      }}
    >
      <Lottie
        animationData={animationData}
        style={{ width: size, height: size }}
        loop={true}
        autoplay={true}
      />
    </div>
  );
};

export default Loader;
