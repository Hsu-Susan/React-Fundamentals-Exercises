import React, { useState, useEffect } from "react";

function ChildComponent() {
  const [color, setColor] = useState("red");

  useEffect(() => {
    let isUnmounted = false;
    setTimeout(() => {
      if (!isUnmounted) {
        setColor("green");
      }
    }, 3000);
    return () => {
      isUnmounted = true;
    };
  });

  return <p style={{ color }}>{color}</p>;
}
export default ChildComponent;
