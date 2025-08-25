import React, { useState, useEffect } from 'react';

interface GaneshMascotProps {
  showBlessing: boolean;
  onAnimationComplete: () => void;
}

const GaneshMascot: React.FC<GaneshMascotProps> = ({ showBlessing, onAnimationComplete }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (showBlessing) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        onAnimationComplete();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showBlessing, onAnimationComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-bounce">
      <div className="relative">
        {/* Ganesh Ji Character */}
        <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-full p-4 shadow-2xl animate-pulse">
          <div className="text-4xl">🐘</div>
        </div>
        
        {/* Blessing Message */}
        <div className="absolute -top-16 -left-8 bg-white rounded-lg p-3 shadow-lg border-2 border-orange-300 animate-fade-in">
          <div className="text-sm font-semibold text-orange-600 whitespace-nowrap">
            🙏 Ganpati Bappa Morya! 🙏
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
            <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-orange-300"></div>
          </div>
        </div>

        {/* Sparkle Effects */}
        <div className="absolute -top-2 -right-2 text-yellow-400 animate-spin">✨</div>
        <div className="absolute -bottom-1 -left-2 text-yellow-400 animate-ping">⭐</div>
        <div className="absolute top-1/2 -right-4 text-orange-400 animate-bounce">🌺</div>
      </div>
    </div>
  );
};

export default GaneshMascot;