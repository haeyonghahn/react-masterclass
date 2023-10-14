import { useEffect, useState } from "react";

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return width;
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  useEffect(() => {
    function handleSize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, []);
  return windowDimensions;
}

export default useWindowDimensions;
