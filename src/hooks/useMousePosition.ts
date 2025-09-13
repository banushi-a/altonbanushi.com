import { useEffect, useState, useRef } from "react";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const rafId = useRef<number | null>(null);
  const lastPosition = useRef({ x: null, y: null });

  useEffect(() => {
    const updateMousePosition = (ev: { clientX: any; clientY: any }) => {
      // Cancel previous frame if it hasn't fired yet
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }

      // Use requestAnimationFrame to throttle updates to 60fps max
      rafId.current = requestAnimationFrame(() => {
        // Only update if position actually changed significantly (reduces renders)
        const newX = ev.clientX;
        const newY = ev.clientY;
        
        if (
          !lastPosition.current.x || 
          !lastPosition.current.y ||
          Math.abs(newX - lastPosition.current.x) > 2 ||
          Math.abs(newY - lastPosition.current.y) > 2
        ) {
          lastPosition.current = { x: newX, y: newY };
          setMousePosition({ x: newX, y: newY });
        }
      });
    };

    window.addEventListener("mousemove", updateMousePosition, { passive: true });

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  return mousePosition;
};

export default useMousePosition;
