// import React, { useState } from "react";
// import { useSpring, animated } from "react-spring";
// import { DraggableCore } from "react-draggable";

// const DraggableRectangle = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [throwProps, setThrowProps] = useState({ x: 0, y: 0 });

//   const springProps = useSpring({
//     x: throwProps.x,
//     y: throwProps.y,
//     config: { mass: 1, tension: 500, friction: 20 }
//   });

//   const handleDrag = (e, data) => {
//     setPosition({ x: data.x, y: data.y });
//   };

//   const handleStop = () => {
//     setThrowProps({ x: position.x, y: position.y });
//   };

//   return (
//     <DraggableCore onDrag={handleDrag} onStop={handleStop}>
//       <animated.div
//         style={{
//           width: 100,
//           height: 50,
//           backgroundColor: "blue",
//           borderRadius: 5,
//           position: "absolute",
//           transform: springProps.xy.interpolate((x, y) => `translate(${x}px, ${y}px)`)
//         }}
//       />
//     </DraggableCore>
//   );
// };

// export default DraggableRectangle;
