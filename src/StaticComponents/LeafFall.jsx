import React from "react";
import leafImage1 from "../assets/StaticImg/red.png"; // First leaf image
// import leafImage2 from "../assets/leaf2.png"; // Second leaf image

const LeafFall = () => {
  const leaves = [...Array(10)].map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`, // Random horizontal position
    duration: `${10 + Math.random() * 8}s`, // Duration between 10s-18s
    delay: `${Math.random() * 5}s`, // Random delay up to 5s
    image: Math.random() > 0.5 ? leafImage1 : leafImage1, // Randomly select one image
  }));

  return (
    <div className="hidden md:block fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]">
      {leaves.map((leaf) => (
        <img
          key={leaf.id}
          src={leaf.image}
          alt="leaf"
          className="leaf"
          style={{
            left: leaf.left,
            animationDuration: leaf.duration,
            animationDelay: leaf.delay,
          }}
        />
      ))}
    </div>
  );
};

export default LeafFall;




