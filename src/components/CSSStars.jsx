import React from 'react';

const CSSStars = () => {
  // Generate random stars data
  const generateStars = (count) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2 + 1,
      animationDelay: Math.random() * 4,
      animationDuration: Math.random() * 3 + 2
    }));
  };

  const stars = generateStars(200);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[-1]">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white opacity-70 animate-pulse"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.animationDelay}s`,
            animationDuration: `${star.animationDuration}s`,
          }}
        />
      ))}
      
      {/* Add some larger twinkling stars */}
      {generateStars(50).map((star) => (
        <div
          key={`large-${star.id}`}
          className="absolute rounded-full bg-white opacity-50 animate-bounce"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size * 1.5}px`,
            height: `${star.size * 1.5}px`,
            animationDelay: `${star.animationDelay + 2}s`,
            animationDuration: `${star.animationDuration + 1}s`,
          }}
        />
      ))}
    </div>
  );
};

export default CSSStars;
