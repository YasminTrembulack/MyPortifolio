import { forwardRef, type RefObject, useEffect, useState } from "react";
import { Ascii } from "./DraggableText.styles";
import type { AnimationProps } from "../../../styles/transitions";

type DraggableTextProps = AnimationProps & {
  children: string;
};

const DraggableText = forwardRef<HTMLDivElement, DraggableTextProps>(
  function DraggableText({ children, $visible }, ref) {
    const containerRef = ref as RefObject<HTMLDivElement>;

    const [position, setPosition] = useState({ x: 90, y: 60});

    const [isDragging, setIsDragging] = useState(false);

    const handleMouseDown = () => setIsDragging(true);

    useEffect(() => {
      const handleMouseMove = ( e: MouseEvent ) => {
        if ( !isDragging || !containerRef.current )
          return;

        const rect = containerRef.current.getBoundingClientRect();

        const x = ((e.clientX - rect.left) / rect.width) * 100;

        const y = ((e.clientY - rect.top) / rect.height) * 100;

        setPosition({
          x: Math.max(0, Math.min(90, x)),
          y: Math.max(0, Math.min(90, y)),
        });
      };

    const handleMouseUp = () => setIsDragging(false);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  
  }, [isDragging, containerRef]);

  const cleanAscii = children.split("\n").map(line => line.trimEnd()).join("\n");

  return (
    <Ascii 
      $positionX={position.x} 
      $positionY={position.y} 
      isDragging={isDragging} 
      onMouseDown={handleMouseDown}
      $visible={$visible}
      $delay={300}
    >
      {cleanAscii}
    </Ascii>
  );
});

export default DraggableText;