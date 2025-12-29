import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button'
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    // 🔥 KRİTİK HAMLE: 'hidden lg:block' ekledik.
    // Bu sayede mobilde kod çalışsa bile ekrana çizilmez.
    <div
      className="hidden lg:block fixed top-0 left-0 w-8 h-8 rounded-full border border-accent pointer-events-none z-50 transition-transform duration-100 ease-out mix-blend-difference"
      style={{
        transform: `translate(${position.x - 16}px, ${position.y - 16}px) scale(${isPointer ? 1.5 : 1})`,
        backgroundColor: isPointer ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
      }}
    >
      <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-accent rounded-full -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
};

export default CustomCursor;
