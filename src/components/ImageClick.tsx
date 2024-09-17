import React, { useRef, useState, useEffect } from 'react';

export interface imageClickProps {
  type: String
}

const ImageClick: React.FC<imageClickProps> = ({type}: imageClickProps) => {

  // GOOFY AH CHATGPT CODE
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dotPositions, setDotPositions] = useState<{ x: number; y: number }[]>([]);
  
  const draw = (image: HTMLImageElement, ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Clear the canvas
    ctx.drawImage(image, 0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = 'red';
    dotPositions.forEach(({ x, y }) => {
      ctx.beginPath();
      ctx.arc(x, y, 10, 0, 2 * Math.PI);
      ctx.fill();
    });
  };

  const handleClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      setDotPositions((prevPositions) => [...prevPositions, { x, y }]);
    }
  };

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (ctx) {
      const image = new Image();
      image.src = '/cresendoField.jpg'; 
      image.onload = () => {
        draw(image, ctx);
      };
    }
  }, [dotPositions]); // Redraw the image and dots whenever dotPositions change

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={800}
        height={400}
        style={{ border: '1px solid black' }}
        onClick={handleClick}
      />
    </div>
  );
};

export default ImageClick;
