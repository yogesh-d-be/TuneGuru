

// import React, { useEffect, useRef, useState } from 'react';
// import Matter from 'matter-js';
// import './Throwables.css';

// // Ensure correct import paths for images
// import applianceImage from '../assests/Icons/household-appliance.png';
// import electricianImage from '../assests/Icons/electrician (2).png';
// import plumberImage from '../assests/Icons/plumber (3).png';
// import carpenterImage from '../assests/Icons/carpenter (3).png';
// import phoneImage from '../assests/Icons/phone.png';
// import vacuumCleanerImage from '../assests/Icons/vacuum-cleaner.png';
// import pesticideImage from '../assests/Icons/pesticide (2).png';
// import motorcycleImage from '../assests/Icons/motorcycle.png';
// import sportCarImage from '../assests/Icons/sport-car.png';
// import waterFilterImage from '../assests/Icons/water-filter.png';
// import varnishImage from '../assests/Icons/varnish.png';

// const ThrowableElement = ({ body, engine, imageSrc }) => {
//   const elementRef = useRef(null);
//   const [isDragging, setIsDragging] = useState(false);
//   const [isRotating, setIsRotating] = useState(false);
//   const [initialMouseAngle, setInitialMouseAngle] = useState(0);
//   const [initialBodyAngle, setInitialBodyAngle] = useState(0);

//   useEffect(() => {
//     const element = elementRef.current;

//     if (element) {
//       const syncBodyWithElement = () => {
//         element.style.transform = `translate(${body.position.x - element.offsetWidth / 2}px, ${
//           body.position.y - element.offsetHeight / 2
//         }px) rotate(${body.angle}rad)`;
//       };

//       Matter.Events.on(engine, 'beforeUpdate', syncBodyWithElement);

//       const handleMouseDown = (event) => {
//         if (event.shiftKey) {
//           setIsRotating(true);
//           const mouseX = event.clientX;
//           const mouseY = event.clientY;
//           const bodyX = body.position.x;
//           const bodyY = body.position.y;
//           const angle = Math.atan2(mouseY - bodyY, mouseX - bodyX);
//           setInitialMouseAngle(angle);
//           setInitialBodyAngle(body.angle);
//         } else {
//           setIsDragging(true);
//         }
//       };

//       const handleMouseUp = () => {
//         setIsDragging(false);
//         setIsRotating(false);
//       };

//       element.addEventListener('mousedown', handleMouseDown);
//       document.addEventListener('mouseup', handleMouseUp);

//       return () => {
//         Matter.Events.off(engine, 'beforeUpdate', syncBodyWithElement);
//         if (element) {
//           element.removeEventListener('mousedown', handleMouseDown);
//         }
//         document.removeEventListener('mouseup', handleMouseUp);
//       };
//     }
//   }, [body, engine]);

//   useEffect(() => {
//     const element = elementRef.current;

//     if (element && isDragging) {
//       const handleMouseMove = (event) => {
//         const sceneRect = element.parentNode.getBoundingClientRect();
//         let newX = event.clientX - sceneRect.left;
//         let newY = event.clientY - sceneRect.top;

//         newX = Math.max(element.offsetWidth / 2, Math.min(sceneRect.width - element.offsetWidth / 2, newX));
//         newY = Math.max(element.offsetHeight / 2, Math.min(sceneRect.height - element.offsetHeight / 2, newY));

//         Matter.Body.setPosition(body, { x: newX, y: newY });
//       };

//       document.addEventListener('mousemove', handleMouseMove);

//       return () => {
//         document.removeEventListener('mousemove', handleMouseMove);
//       };
//     }

//     if (element && isRotating) {
//       const handleMouseMove = (event) => {
//         const mouseX = event.clientX;
//         const mouseY = event.clientY;
//         const bodyX = body.position.x;
//         const bodyY = body.position.y;
//         const angle = Math.atan2(mouseY - bodyY, mouseX - bodyX);
//         const newAngle = initialBodyAngle + (angle - initialMouseAngle);
//         Matter.Body.setAngle(body, newAngle);
//       };

//       document.addEventListener('mousemove', handleMouseMove);

//       return () => {
//         document.removeEventListener('mousemove', handleMouseMove);
//       };
//     }
//   }, [body, isDragging, isRotating, initialMouseAngle, initialBodyAngle]);

//   return (
//     <img
//       ref={elementRef}
//       src={imageSrc}
//       alt={body.label}
//       className="lqd-throwable-element"
//       style={{
//         width: '100px',
//         height: '100px',
//         position: 'absolute',
//         pointerEvents: 'auto', // Ensure the element is clickable
//         cursor: 'grab',
//       }}
//     />
//   );
// };

// const ThrowablesScene = () => {
//   const sceneRef = useRef(null);
//   const engineRef = useRef(Matter.Engine.create());
//   const [elements, setElements] = useState([]);
//   const initialElements = [
//     { text: 'Appliances', image: applianceImage, x: 100, y: 100 },
//     { text: 'Electrician', image: electricianImage, x: 200, y: 100 },
//     { text: 'Plumber', image: plumberImage, x: 300, y: 100 },
//     { text: 'Carpenter', image: carpenterImage, x: 400, y: 100 },
//     { text: 'Device Services', image: phoneImage, x: 500, y: 100 },
//     { text: 'Cleaning Services', image: vacuumCleanerImage, x: 600, y: 100 },
//     { text: 'Pest Control', image: pesticideImage, x: 700, y: 100 },
//     { text: 'Vehicle Services', image: motorcycleImage, x: 800, y: 100 },
//     { text: 'Water Purifier', image: sportCarImage, x: 900, y: 100 },
//     { text: 'Painting', image: waterFilterImage, x: 1000, y: 100 },
//     { text: 'Painting', image: varnishImage, x: 1100, y: 100 },
//   ];

//   useEffect(() => {
//     const engine = engineRef.current;
//     const render = Matter.Render.create({
//       element: sceneRef.current,
//       engine: engine,
//       options: {
//         width: sceneRef.current.offsetWidth,
//         height: sceneRef.current.offsetHeight,
//         wireframes: false,
//         background: 'transparent', // Set background to transparent
//       },
//     });

//     const bounds = {
//       width: sceneRef.current.offsetWidth,
//       height: sceneRef.current.offsetHeight,
//     };

//     const ground = Matter.Bodies.rectangle(bounds.width / 2, bounds.height + 25, bounds.width, 50, {
//       isStatic: true,
//       friction: 1,
//     });
//     const leftWall = Matter.Bodies.rectangle(-25, bounds.height / 2, 50, bounds.height, {
//       isStatic: true,
//       friction: 1,
//     });
//     const rightWall = Matter.Bodies.rectangle(bounds.width + 25, bounds.height / 2, 50, bounds.height, {
//       isStatic: true,
//       friction: 1,
//     });
//     const ceiling = Matter.Bodies.rectangle(bounds.width / 2, -25, bounds.width, 50, {
//       isStatic: true,
//       friction: 1,
//     });

//     Matter.World.add(engine.world, [ground, leftWall, rightWall, ceiling]);

//     Matter.Engine.run(engine);
//     Matter.Render.run(render);

//     return () => {
//       Matter.Engine.clear(engine);
//       Matter.Render.stop(render);
//       render.canvas.remove();
//       render.textures = {};
//     };
//   }, []);

//   useEffect(() => {
//     const elementBodies = initialElements.map((el) => {
//       const body = Matter.Bodies.rectangle(el.x, el.y, 100, 100, {
//         label: el.text,
//         frictionAir: 0.05,
//         restitution: 0.8,
//       });
//       Matter.World.add(engineRef.current.world, body);
//       return { body, image: el.image };
//     });
//     setElements(elementBodies);
//   }, []);

//   return (
//     <div ref={sceneRef} className="lqd-throwable-scene relative w-full border border-solid border-black" style={{ height: '400px' }}>
//       {elements.map((element, index) => (
//         <ThrowableElement key={index} body={element.body} engine={engineRef.current} imageSrc={element.image} />
//       ))}
//     </div>
//   );
// };

// export default ThrowablesScene;




// import React, { useEffect, useRef, useState } from 'react';
// import Matter from 'matter-js';
// import './Throwables.css';

// const ThrowableElement = ({ body, engine }) => {
//   const elementRef = useRef(null);
//   const [isDragging, setIsDragging] = useState(false);
//   const [isRotating, setIsRotating] = useState(false);
//   const [initialMouseAngle, setInitialMouseAngle] = useState(0);
//   const [initialBodyAngle, setInitialBodyAngle] = useState(0);

//   useEffect(() => {
//     const element = elementRef.current;

//     if (element) {
//       const syncBodyWithElement = () => {
//         element.style.transform = `translate(${body.position.x - element.offsetWidth / 2}px, ${
//           body.position.y - element.offsetHeight / 2
//         }px) rotate(${body.angle}rad)`;
//       };

//       Matter.Events.on(engine, 'beforeUpdate', syncBodyWithElement);

//       const handleMouseDown = (event) => {
//         if (event.shiftKey) {
//           setIsRotating(true);
//           const mouseX = event.clientX;
//           const mouseY = event.clientY;
//           const bodyX = body.position.x;
//           const bodyY = body.position.y;
//           const angle = Math.atan2(mouseY - bodyY, mouseX - bodyX);
//           setInitialMouseAngle(angle);
//           setInitialBodyAngle(body.angle);
//         } else {
//           setIsDragging(true);
//         }
//       };

//       const handleMouseUp = () => {
//         setIsDragging(false);
//         setIsRotating(false);
//       };

//       element.addEventListener('mousedown', handleMouseDown);
//       document.addEventListener('mouseup', handleMouseUp);

//       return () => {
//         Matter.Events.off(engine, 'beforeUpdate', syncBodyWithElement);
//         if (element) {
//           element.removeEventListener('mousedown', handleMouseDown);
//         }
//         document.removeEventListener('mouseup', handleMouseUp);
//       };
//     }
//   }, [body, engine]);

//   useEffect(() => {
//     const element = elementRef.current;

//     if (element && isDragging) {
//       const handleMouseMove = (event) => {
//         const sceneRect = element.parentNode.getBoundingClientRect();
//         let newX = event.clientX - sceneRect.left;
//         let newY = event.clientY - sceneRect.top;

//         newX = Math.max(element.offsetWidth / 2, Math.min(sceneRect.width - element.offsetWidth / 2, newX));
//         newY = Math.max(element.offsetHeight / 2, Math.min(sceneRect.height - element.offsetHeight / 2, newY));

//         Matter.Body.setPosition(body, { x: newX, y: newY });
//       };

//       document.addEventListener('mousemove', handleMouseMove);

//       return () => {
//         document.removeEventListener('mousemove', handleMouseMove);
//       };
//     }

//     if (element && isRotating) {
//       const handleMouseMove = (event) => {
//         const mouseX = event.clientX;
//         const mouseY = event.clientY;
//         const bodyX = body.position.x;
//         const bodyY = body.position.y;
//         const angle = Math.atan2(mouseY - bodyY, mouseX - bodyX);
//         const newAngle = initialBodyAngle + (angle - initialMouseAngle);
//         Matter.Body.setAngle(body, newAngle);
//       };

//       document.addEventListener('mousemove', handleMouseMove);

//       return () => {
//         document.removeEventListener('mousemove', handleMouseMove);
//       };
//     }
//   }, [body, isDragging, isRotating, initialMouseAngle, initialBodyAngle]);

//   return (
//     <div ref={elementRef} className="lqd-throwable-element">
//       <span className="text-black py-0/25em px-1/5em text-22 leading-1/5em rounded-100 lqd-throwable-element-rot inline-block sm:text-16">
//         {body.label}
//       </span>
//     </div>
//   );
// };

// const ThrowablesScene = () => {
//   const sceneRef = useRef(null);
//   const engineRef = useRef(Matter.Engine.create());
//   const [elements, setElements] = useState([]);

//   let ground, leftWall, rightWall, ceiling;

//   useEffect(() => {
//     const engine = engineRef.current;
//     const render = Matter.Render.create({
//       element: sceneRef.current,
//       engine: engine,
//       options: {
//         width: sceneRef.current.offsetWidth,
//         height: sceneRef.current.offsetHeight,
//         wireframes: false,
//         background: '#f0f0f0',
//       },
//     });

//     const bounds = {
//       width: sceneRef.current.offsetWidth,
//       height: sceneRef.current.offsetHeight,
//     };

//     ground = Matter.Bodies.rectangle(bounds.width / 2, bounds.height + 25, bounds.width, 50, {
//       isStatic: true,
//       friction: 1,
//     });
//     leftWall = Matter.Bodies.rectangle(-25, bounds.height / 2, 50, bounds.height, {
//       isStatic: true,
//       friction: 1,
//     });
//     rightWall = Matter.Bodies.rectangle(bounds.width + 25, bounds.height / 2, 50, bounds.height, {
//       isStatic: true,
//       friction: 1,
//     });
//     ceiling = Matter.Bodies.rectangle(bounds.width / 2, -25, bounds.width, 50, {
//       isStatic: true,
//       friction: 1,
//     });

//     Matter.World.add(engine.world, [ground, leftWall, rightWall, ceiling]);

//     Matter.Engine.run(engine);
//     Matter.Render.run(render);

//     const handleMouseDown = (event) => {
//       const { clientX, clientY } = event;
//       const sceneRect = sceneRef.current.getBoundingClientRect();
//       const offsetX = clientX - sceneRect.left;
//       const offsetY = clientY - sceneRect.top;

//       const body = Matter.Bodies.rectangle(offsetX, offsetY, 150, 50, {
//         frictionAir: 0.05,
//         restitution: 0.8,
//       });

//       // Matter.World.add(engineRef.current.world, body);
//       // setElements((prevElements) => [...prevElements, body]);
//     };

//     const currentScene = sceneRef.current;
//     if (currentScene) {
//       currentScene.addEventListener('mousedown', handleMouseDown);
//     }

//     return () => {
//       Matter.Engine.clear(engine);
//       Matter.Render.stop(render);
//       render.canvas.remove();
//       render.textures = {};
//       if (currentScene) {
//         currentScene.removeEventListener('mousedown', handleMouseDown);
//       }
//     };
//   }, []);

//   useEffect(() => {
//     const initialElements = [
//       { text: 'Painting', x: 100, y: 0 },
//       { text: 'Water Proofing', x: 200, y: 0 },
//       { text: 'Fabrication', x: 300, y: 0 },
//       { text: 'False Ceiling', x: 400, y: 0 },
//       { text: 'Glass Work', x: 500, y: 0 },
//       { text: 'Granite Work', x: 600, y: 0 },
//       { text: 'Area Extension', x: 700, y: 0 },
//     ];

//     initialElements.forEach((el) => {
//       const body = Matter.Bodies.rectangle(el.x, el.y, 150, 50, {
//         label: el.text,
//         frictionAir: 0.05,
//         restitution: 0.8,
//       });
//       Matter.World.add(engineRef.current.world, body);
//       setElements((prevElements) => [...prevElements, body]);
//     });
//   }, []);

//   useEffect(() => {
//     const handleCollision = (event) => {
//       const pairs = event.pairs;
//       pairs.forEach((pair) => {
//         const { bodyA, bodyB } = pair;

//         if (bodyA.isStatic || bodyB.isStatic) {
//           const dynamicBody = bodyA.isStatic ? bodyB : bodyA;
//           const boundaryBody = bodyA.isStatic ? bodyA : bodyB;

//           if (boundaryBody !== ground) {
//             const velocity = dynamicBody.velocity;
//             const speed = Math.sqrt(velocity.x * velocity.x + velocity.y * velocity.y);
//             const stepBackDistance = speed * 5; // Adjust this multiplier for desired step back distance

//             let newX = dynamicBody.position.x;
//             let newY = dynamicBody.position.y;

//             if (boundaryBody === ceiling) {
//               newY += stepBackDistance;
//             } else if (boundaryBody === leftWall) {
//               newX += stepBackDistance;
//             } else if (boundaryBody === rightWall) {
//               newX -= stepBackDistance;
//             }

//             Matter.Body.setPosition(dynamicBody, { x: newX, y: newY });
//           }
//         }
//       });
//     };

//     Matter.Events.on(engineRef.current, 'collisionStart', handleCollision);

//     return () => {
//       Matter.Events.off(engineRef.current, 'collisionStart', handleCollision);
//     };
//   }, []);

//   return (
//     <div ref={sceneRef} className="lqd-throwable-scene relative w-full border border-solid border-black" style={{ height: '400px' }}>
//       {elements.map((body, index) => (
//         <ThrowableElement key={index} body={body} engine={engineRef.current} />
//       ))}
//     </div>
//   );
// };

// export default ThrowablesScene;

import React, { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';
import './Throwables.css';

const ThrowableElement = ({ body, engine }) => {
  const elementRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const [initialMouseAngle, setInitialMouseAngle] = useState(0);
  const [initialBodyAngle, setInitialBodyAngle] = useState(0);
 
  useEffect(() => {
    const element = elementRef.current;
    

    if (element) {
      const syncBodyWithElement = () => {
        element.style.transform = `translate(${body.position.x - element.offsetWidth / 2}px, ${
          body.position.y - element.offsetHeight / 2
        }px) rotate(${body.angle}rad)`;
      };

      Matter.Events.on(engine, 'beforeUpdate', syncBodyWithElement);

      const handleMouseDown = (event) => {
        if (event.shiftKey) {
          setIsRotating(true);
          const mouseX = event.clientX;
          const mouseY = event.clientY;
          const bodyX = body.position.x;
          const bodyY = body.position.y;
          const angle = Math.atan2(mouseY - bodyY, mouseX - bodyX);
          setInitialMouseAngle(angle);
          setInitialBodyAngle(body.angle);
        } else {
          setIsDragging(true);
        }
      };

      const handleMouseUp = () => {
        setIsDragging(false);
        setIsRotating(false);
      };

      element.addEventListener('mousedown', handleMouseDown);
      document.addEventListener('mouseup', handleMouseUp);

      return () => {
        Matter.Events.off(engine, 'beforeUpdate', syncBodyWithElement);
        if (element) {
          element.removeEventListener('mousedown', handleMouseDown);
        }
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [body, engine]);

  useEffect(() => {
    const element = elementRef.current;

    if (element && isDragging) {
      const handleMouseMove = (event) => {
        const sceneRect = element.parentNode.getBoundingClientRect();
        let newX = event.clientX - sceneRect.left;
        let newY = event.clientY - sceneRect.top;

        newX = Math.max(element.offsetWidth / 2, Math.min(sceneRect.width - element.offsetWidth / 2, newX));
        newY = Math.max(element.offsetHeight / 2, Math.min(sceneRect.height - element.offsetHeight / 2, newY));

        Matter.Body.setPosition(body, { x: newX, y: newY });
      };

      document.addEventListener('mousemove', handleMouseMove);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
      };
    }

    if (element && isRotating) {
      const handleMouseMove = (event) => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        const bodyX = body.position.x;
        const bodyY = body.position.y;
        const angle = Math.atan2(mouseY - bodyY, mouseX - bodyX);
        const newAngle = initialBodyAngle + (angle - initialMouseAngle);
        Matter.Body.setAngle(body, newAngle);
      };

      document.addEventListener('mousemove', handleMouseMove);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, [body, isDragging, isRotating, initialMouseAngle, initialBodyAngle]);

  return (
    <div ref={elementRef}  className="lqd-throwable-element"
      style={{
        // backgroundColor: 'skyblue', // Set the background color to blue
        // width: '165px', // Set the width of the element
        // height: '60px', // Set the height of the element
        // borderRadius:'20px'
       
      }} >
      <span className="text-black py-0/25em px-1/5em text-22 leading-1/5em rounded-100 lqd-throwable-element-rot inline-block sm:text-16 ">
        {body.label}
      </span>
    </div>
  );
};

const ThrowablesScene = () => {
  const sceneRef = useRef(null);
  const engineRef = useRef(Matter.Engine.create());
  const [elements, setElements] = useState([]);

  let ground, leftWall, rightWall, ceiling;

  useEffect(() => {
    const engine = engineRef.current;
    const render = Matter.Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: sceneRef.current.offsetWidth,
        height: sceneRef.current.offsetHeight,
        wireframes: false,
        background: '#f0f0f0',
      },
    });

    const bounds = {
      width: sceneRef.current.offsetWidth,
      height: sceneRef.current.offsetHeight,
    };

    ground = Matter.Bodies.rectangle(bounds.width / 2, bounds.height + 25, bounds.width, 50, {
      isStatic: true,
      friction: 1,
    });
    leftWall = Matter.Bodies.rectangle(-25, bounds.height / 2, 50, bounds.height, {
      isStatic: true,
      friction: 1,
    });
    rightWall = Matter.Bodies.rectangle(bounds.width + 25, bounds.height / 2, 50, bounds.height, {
      isStatic: true,
      friction: 1,
    });
    ceiling = Matter.Bodies.rectangle(bounds.width / 2, -25, bounds.width, 50, {
      isStatic: true,
      friction: 1,
    });

    Matter.World.add(engine.world, [ground, leftWall, rightWall, ceiling]);

    Matter.Engine.run(engine);
    Matter.Render.run(render);

    const handleMouseDown = (event) => {
      const { clientX, clientY } = event;
      const sceneRect = sceneRef.current.getBoundingClientRect();
      const offsetX = clientX - sceneRect.left;
      const offsetY = clientY - sceneRect.top;

      const body = Matter.Bodies.rectangle(offsetX, offsetY, 150, 50, {
        frictionAir: 0.05,
        restitution: 0.8,
      });

      // Matter.World.add(engineRef.current.world, body);
      // setElements((prevElements) => [...prevElements, body]);
    };

    const currentScene = sceneRef.current;
    if (currentScene) {
      currentScene.addEventListener('mousedown', handleMouseDown);
    }

    return () => {
      Matter.Engine.clear(engine);
      Matter.Render.stop(render);
      render.canvas.remove();
      render.textures = {};
      if (currentScene) {
        currentScene.removeEventListener('mousedown', handleMouseDown);
      }
    };
  }, []);

  useEffect(() => {
    const initialElements = [
     { text: 'Devices', x: 100, y: 0, color: 'red' },
  { text: 'Vehicles', x: 200, y: 0, color: 'blue' },
  { text: 'Electrician', x: 300, y: 0, color: 'green' },
  { text: 'Carpenter', x: 400, y: 0, color: 'orange' },
  { text: 'Painting', x: 400, y: 0, color: 'purple' },
  { text: 'Appliances', x: 500, y: 0, color: 'cyan' },
  { text: 'Water Purifier', x: 500, y: 0, color: 'magenta' },
  { text: 'Cleaning', x: 600, y: 0, color: 'yellow' },
  { text: 'Pest control', x: 600, y: 0, color: 'brown' },
  { text: 'Plumbing', x: 700, y: 0, color: 'gray' },
    ];

    initialElements.forEach((el) => {
      const body = Matter.Bodies.rectangle(el.x, el.y, 150, 50, {
        label: el.text,
        frictionAir: 0.05,
        restitution: 0.8,
        
      });
      Matter.World.add(engineRef.current.world, body);
      setElements((prevElements) => [...prevElements, body]);
    });
  }, []);

  useEffect(() => {
    const handleCollision = (event) => {
      const pairs = event.pairs;
      pairs.forEach((pair) => {
        const { bodyA, bodyB } = pair;

        if (bodyA.isStatic || bodyB.isStatic) {
          const dynamicBody = bodyA.isStatic ? bodyB : bodyA;
          const boundaryBody = bodyA.isStatic ? bodyA : bodyB;

          if (boundaryBody !== ground) {
            const velocity = dynamicBody.velocity;
            const speed = Math.sqrt(velocity.x * velocity.x + velocity.y * velocity.y);
            const stepBackDistance = speed * 5; // Adjust this multiplier for desired step back distance

            let newX = dynamicBody.position.x;
            let newY = dynamicBody.position.y;

            if (boundaryBody === ceiling) {
              newY += stepBackDistance;
            } else if (boundaryBody === leftWall) {
              newX += stepBackDistance;
            } else if (boundaryBody === rightWall) {
              newX -= stepBackDistance;
            }

            Matter.Body.setPosition(dynamicBody, { x: newX, y: newY });
          }
        }
      });
    };

    Matter.Events.on(engineRef.current, 'collisionStart', handleCollision);

    return () => {
      Matter.Events.off(engineRef.current, 'collisionStart', handleCollision);
    };
  }, []);

  return (
    <div ref={sceneRef} className="lqd-throwable-scene relative w-full border border-solid border-black" style={{ height: '400px' }}>
      
      {elements.map((body, index) => (
       
        <ThrowableElement key={index} body={body} engine={engineRef.current} />
        
      ))}
      
    </div>
  );
};

export default ThrowablesScene;
