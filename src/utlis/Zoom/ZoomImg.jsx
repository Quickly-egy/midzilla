import React, { useRef, useState } from "react";
import styles from "./zoomimg.module.css";

const ZoomImge = ({ src, alt }) => {
  const containerRef = useRef(null);

  const [display, setDisplay] = useState("none");

  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPos({ x, y });
    setDisplay("block");
  };

  const handleMouseLeave = () => {
    setDisplay("none");
  };

  const cssVars= {
    "--url": `url(${src})`,
    "--zoom-x": `${zoomPos.x}%`,
    "--zoom-y": `${zoomPos.y}%`,
    "--display": display,
  };

  return (
    <div
      ref={containerRef}
      className={`${styles.imageZoom}`}
      style={cssVars}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img src={src} alt={alt} className={styles.img} />
    </div>
  );
};

export default ZoomImge;
