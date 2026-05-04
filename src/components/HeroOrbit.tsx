import { twMerge } from "tailwind-merge";

type HeroOrbitProps = {
  children: React.ReactNode;
  size: number;
  rotation: number;
  shouldOrbit?: boolean;
  shouldSpin?: boolean;
  orbitDuration?: string;
  spinDuration?: string;
};

export const HeroOrbit = ({
  children,
  size,
  rotation,
  shouldOrbit = false,
  shouldSpin = false,
  orbitDuration,
  spinDuration,
}: HeroOrbitProps) => {
  return (
    <div className="absolute left-1/2 top-1/2 -z-20 -translate-x-1/2 -translate-y-1/2">
      <div
        className={twMerge(shouldOrbit && "animate-spin")}
        style={shouldOrbit ? { animationDuration: orbitDuration } : undefined}
      >
        <div
          className="flex items-start justify-start"
          style={{
            transform: `rotate(${rotation}deg)`,
            height: `${size}px`,
            width: `${size}px`,
          }}
        >
          <div
            className={twMerge(shouldSpin && "animate-spin")}
            style={shouldSpin ? { animationDuration: spinDuration } : undefined}
          >
            <div
              className="inline-flex"
              style={{ transform: `rotate(${rotation * -1}deg)` }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
