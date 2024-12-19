import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

type ColorType = string;

const COLOR_ARRAY = [
  "#ed023a", // Rojo
  "#6610f2", // Morado
  "#6f42c1", // Violeta
  "#d63384", // Rosa
  "#dc3545", // Rojo oscuro
];

interface ColorContextType {
  currentColor: ColorType;
}

const ColorContext = createContext<ColorContextType | undefined>(undefined);

const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : { r: 0, g: 0, b: 0 };
};

const rgbToHex = (r: number, g: number, b: number): string => {
  return (
    "#" +
    [r, g, b]
      .map((x) => Math.round(x))
      .map((x) => x.toString(16).padStart(2, "0"))
      .join("")
  );
};

const interpolateColor = (
  color1: string,
  color2: string,
  factor: number
): string => {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);

  const r = rgb1.r + (rgb2.r - rgb1.r) * factor;
  const g = rgb1.g + (rgb2.g - rgb1.g) * factor;
  const b = rgb1.b + (rgb2.b - rgb1.b) * factor;

  return rgbToHex(r, g, b);
};

export const ColorProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentColor, setCurrentColor] = useState<ColorType>(COLOR_ARRAY[0]);
  const [colorIndex, setColorIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const animateColorTransition = useCallback(
    (fromColor: string, toColor: string) => {
      setIsTransitioning(true);
      let startTime: number | null = null;
      const duration = 1000; // 1 segundo para la transición

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const interpolatedColor = interpolateColor(
          fromColor,
          toColor,
          progress
        );
        setCurrentColor(interpolatedColor);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setIsTransitioning(false);
        }
      };

      requestAnimationFrame(animate);
    },
    []
  );

  useEffect(() => {
    if (!isTransitioning) {
      const interval = setInterval(() => {
        const nextIndex = (colorIndex + 1) % COLOR_ARRAY.length;
        setColorIndex(nextIndex);
        animateColorTransition(COLOR_ARRAY[colorIndex], COLOR_ARRAY[nextIndex]);
      }, 3000); // Cambia cada 3 segundos

      return () => clearInterval(interval);
    }
  }, [colorIndex, isTransitioning, animateColorTransition]);

  return (
    <ColorContext.Provider value={{ currentColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColor = () => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error("useColor must be used within a ColorProvider");
  }
  return context;
};
