import React, { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';
import './Throwables.css';

const syncBodyWithElement = (element, body) => {
  if (!body) return; // Ensure body is defined
  element.style.transform = `translate(${body.position.x - element.offsetWidth / 2}px, ${
    body.position.y - element.offsetHeight / 2
  }px) rotate(${body.angle}rad)`;
};

const ThrowableElement = ({ body, engine, label }) => {
  const elementRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const [initialMouseAngle, setInitialMouseAngle] = useState(0);
  const [initialBodyAngle, setInitialBodyAngle] = useState(0);

  useEffect(() => {
    const element = elementRef.current;

    if (element && body) {
      const updateSync = () => syncBodyWithElement(element, body);
      Matter.Events.on(engine, 'beforeUpdate', updateSync);

      const handlePointerDown = (event) => {
        event.preventDefault(); // Prevent default touch behavior
        if (event.shiftKey || (event.touches && event.touches.length > 1)) {
          setIsRotating(true);
          const mouseX = event.clientX || event.touches[0].clientX;
          const mouseY = event.clientY || event.touches[0].clientY;
          const bodyX = body.position.x;
          const bodyY = body.position.y;
          const angle = Math.atan2(mouseY - bodyY, mouseX - bodyX);
          setInitialMouseAngle(angle);
          setInitialBodyAngle(body.angle);
        } else {
          setIsDragging(true);
        }
      };

      const handlePointerUp = () => {
        setIsDragging(false);
        setIsRotating(false);
      };

      element.addEventListener('mousedown', handlePointerDown);
      element.addEventListener('touchstart', handlePointerDown);
      document.addEventListener('mouseup', handlePointerUp);
      document.addEventListener('touchend', handlePointerUp);

      return () => {
        Matter.Events.off(engine, 'beforeUpdate', updateSync);
        element.removeEventListener('mousedown', handlePointerDown);
        element.removeEventListener('touchstart', handlePointerDown);
        document.removeEventListener('mouseup', handlePointerUp);
        document.removeEventListener('touchend', handlePointerUp);
      };
    }
  }, [body, engine]);

  useEffect(() => {
    const element = elementRef.current;

    if (element && (isDragging || isRotating)) {
      const handlePointerMove = (event) => {
        event.preventDefault(); // Prevent default touch behavior
        const mouseX = event.clientX || event.touches[0].clientX;
        const mouseY = event.clientY || event.touches[0].clientY;

        if (isDragging) {
          const sceneRect = element.parentNode.getBoundingClientRect();
          let newX = mouseX - sceneRect.left;
          let newY = mouseY - sceneRect.top;

          newX = Math.max(element.offsetWidth / 2, Math.min(sceneRect.width - element.offsetWidth / 2, newX));
          newY = Math.max(element.offsetHeight / 2, Math.min(sceneRect.height - element.offsetHeight / 2, newY));

          Matter.Body.setPosition(body, { x: newX, y: newY });
        } else if (isRotating) {
          const bodyX = body.position.x;
          const bodyY = body.position.y;
          const angle = Math.atan2(mouseY - bodyY, mouseX - bodyX);
          const newAngle = initialBodyAngle + (angle - initialMouseAngle);
          Matter.Body.setAngle(body, newAngle);
        }
      };

      document.addEventListener('mousemove', handlePointerMove);
      document.addEventListener('touchmove', handlePointerMove);

      return () => {
        document.removeEventListener('mousemove', handlePointerMove);
        document.removeEventListener('touchmove', handlePointerMove);
      };
    }
  }, [body, isDragging, isRotating, initialMouseAngle, initialBodyAngle]);

  return (
    <div
      ref={elementRef}
      className="lqd-throwable-element"
      style={{ position: 'absolute', touchAction: 'none' }} // Prevent scrolling while dragging
    >
      <span className="text-black py-0/25em px-1/5em text-22 leading-1/5em rounded-100 lqd-throwable-element-rot inline-block sm:text-16">
        {label}
      </span>
    </div>
  );
};

const ThrowablesScene = () => {
  const sceneRef = useRef(null);
  const engineRef = useRef(Matter.Engine.create());
  const [elements, setElements] = useState([]);

  const getInitialElements = () => {
    const width = window.innerWidth;
    if (width >= 990) {
      return [
        { text: 'Devices', x: 100, y: 0, color: 'red' },
        { text: 'Vehicles', x: 200, y: 0, color: 'blue' },
        { text: 'Electrician', x: 300, y: 0, color: 'green' },
        { text: 'Carpenter', x: 400, y: 0, color: 'orange' },
        { text: 'Painting', x: 500, y: 0, color: 'purple' },
        { text: 'Appliances', x: 600, y: 0, color: 'cyan' },
        { text: 'Water Purifier', x: 700, y: 0, color: 'magenta' },
        { text: 'Cleaning', x: 800, y: 0, color: 'yellow' },
        { text: 'Pest control', x: 900, y: 0, color: 'brown' },
        { text: 'Plumbing', x: 920, y: 0, color: 'gray' },
      ];
    } else if((width<=990)&&(width>=768)) {
      return [
        { text: 'Devices', x: 50, y: 0, color: 'red' },
        { text: 'Vehicles', x: 130, y: 0, color: 'blue' },
        { text: 'Electrician', x: 180, y: 0, color: 'green' },
        { text: 'Carpenter', x: 230, y: 0, color: 'orange' },
        { text: 'Painting', x: 280, y: 0, color: 'purple' },
        { text: 'Appliances', x: 330, y: 0, color: 'cyan' },
        { text: 'Water Purifier', x: 380, y: 0, color: 'magenta' },
        { text: 'Cleaning', x: 430, y: 0, color: 'yellow' },
        { text: 'Pest control', x: 480, y: 0, color: 'brown' },
        { text: 'Plumbing', x: 530, y: 0, color: 'gray' },
      ];
    }
    else if((width<=768)&&(width>=550)) {
      return [
        { text: 'Devices', x: 50, y: 0, color: 'red' },
        { text: 'Vehicles', x: 100, y: 0, color: 'blue' },
        { text: 'Electrician', x: 150, y: 0, color: 'green' },
        { text: 'Carpenter', x: 200, y: 0, color: 'orange' },
        { text: 'Painting', x: 250, y: 0, color: 'purple' },
        { text: 'Appliances', x: 300, y: 0, color: 'cyan' },
        { text: 'Water Purifier', x: 350, y: 0, color: 'magenta' },
        { text: 'Cleaning', x: 400, y: 0, color: 'yellow' },
        { text: 'Pest control', x: 450, y: 0, color: 'brown' },
        { text: 'Plumbing', x: 500, y: 0, color: 'gray' },
      ];
    }
    else if((width<=550)&&(width>=300)) {
      return [
        { text: 'Devices', x: 50, y: 0, color: 'red' },
        { text: 'Vehicles', x: 100, y: 0, color: 'blue' },
        { text: 'Electrician', x: 100, y: 0, color: 'green' },
        { text: 'Carpenter', x: 150, y: 0, color: 'orange' },
        { text: 'Painting', x: 200, y: 0, color: 'purple' },
        { text: 'Appliances', x: 200, y: 0, color: 'cyan' },
        { text: 'Water Purifier', x: 250, y: 0, color: 'magenta' },
        { text: 'Cleaning', x: 300, y: 0, color: 'yellow' },
        { text: 'Pest control', x: 300, y: 0, color: 'brown' },
        { text: 'Plumbing', x: 300, y: 0, color: 'gray' },
      ];
    }
    
  };

  

  useEffect(() => {
    const width = window.innerWidth;
    const engine = engineRef.current;
    const render = Matter.Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: sceneRef.current.offsetWidth,
        height: sceneRef.current.offsetHeight,
        wireframes: false,
        background: 'gray',
      },
    });

    const bounds = {
      width: sceneRef.current.offsetWidth,
      height: sceneRef.current.offsetHeight,
    };

    const ground = Matter.Bodies.rectangle(bounds.width / 2, bounds.height + 25, bounds.width, 50, {
      isStatic: true,
      friction: 1,
    });
    const leftWall = Matter.Bodies.rectangle(-25, bounds.height / 2, 50, bounds.height, {
      isStatic: true,
      friction: 1,
    });
    const rightWall = Matter.Bodies.rectangle(bounds.width + 25, bounds.height / 2, 50, bounds.height, {
      isStatic: true,
      friction: 1,
    });
    const ceiling = Matter.Bodies.rectangle(bounds.width / 2, -25, bounds.width, 50, {
      isStatic: true,
      friction: 1,
    });

    Matter.World.add(engine.world, [ground, leftWall, rightWall, ceiling]);

    Matter.Engine.run(engine);
    Matter.Render.run(render);
    if (width >= 990){
    const initialElements = getInitialElements();
    initialElements.forEach((element) => {
      const newBody = Matter.Bodies.rectangle(element.x, element.y, 150, 50, {
        frictionAir: 0.05,
        restitution: 0.8,
      });
      Matter.World.add(engine.world, newBody);
      setElements((prevElements) => [
        ...prevElements,
        { body: newBody, label: element.text, color: element.color },
      ]);
    });
  }
  else if((width<=990)&&(width>=768)){
    const initialElements = getInitialElements();
    initialElements.forEach((element) => {
      const newBody = Matter.Bodies.rectangle(element.x, element.y, 130, 50, {
        frictionAir: 0.05,
        restitution: 0.8,
      });
      Matter.World.add(engine.world, newBody);
      setElements((prevElements) => [
        ...prevElements,
        { body: newBody, label: element.text, color: element.color },
      ]);
    });
  }
  else{
    const initialElements = getInitialElements();
    initialElements.forEach((element) => {
      const newBody = Matter.Bodies.rectangle(element.x, element.y, 100, 50, {
        frictionAir: 0.05,
        restitution: 0.8,
      });
      Matter.World.add(engine.world, newBody);
      setElements((prevElements) => [
        ...prevElements,
        { body: newBody, label: element.text, color: element.color },
      ]);
    });
  }
    return () => {
      Matter.Engine.clear(engine);
      Matter.Render.stop(render);
      render.canvas.remove();
      render.textures = {};
    };
  }, []);

  return (
    <div
      ref={sceneRef}
      className="throwables-scene"
      style={{ width: '100%', height: '80vh', position: 'relative', overflow: 'hidden' }}
      onTouchStart={(event) => event.preventDefault()} // Prevent scrolling on touch devices
    >
      {elements.map((element, index) => (
        <ThrowableElement
          key={index}
          body={element.body}
          engine={engineRef.current}
          label={element.label}
        />
      ))}
    </div>
  );
};

export default ThrowablesScene;
