import { useState, useEffect } from "react";
import Confetti from "react-confetti";

const ConfettiEffect = () => {
  const [isConfettiVisible, setIsConfettiVisible] = useState(true);
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleSize = () => {
    setSize({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener("resize", handleSize);
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsConfettiVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {isConfettiVisible && (
        <Confetti width={size.width} height={size.height} />
      )}
    </>
  );
};

export default ConfettiEffect;
