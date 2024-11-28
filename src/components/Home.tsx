import { Coins } from 'lucide-react';
import { useRef, useState } from 'react';

export default () => {
  const [coins, setCoins] = useState(0);
  const pointsRef = useRef<SVGForeignObjectElement>(null);
  const handlePress = (e: PointerEvent) => {
    setCoins((p) => p + 5);
    const para = document.createElement('p');
    para.textContent = '+5';
    para.style.cssText =
      'position:absolute;width:fit-content;user-select:none;font-size:32px;font-weight:700;';
    const target = e.currentTarget as SVGSVGElement;
    pointsRef.current?.append(para);
    target.animate({ transform: 'translateY(3px)' }, 100);
    const pos = [e.clientX, e.clientY];
    console.log(pos);
    const anim = para.animate(
      {
        translate: [
          `${pos[0] - 110}px ${pos[1] - 330}px`,
          `${pos[0] - 110}px ${pos[1] - 350}px`,
        ],
        opacity: [0, 1, 0],
      },
      500,
    );
    anim.addEventListener('finish', () => {
      para.remove();
    });
  };
  return (
    <div className="dark:text-white">
      <h2 className="pt-16 mx-auto w-fit text-2xl font-bold dark:text-white">
        press the button to get money
      </h2>
      <p className="flex gap-4 w-fit mx-auto mt-36 text-3xl">
        <Coins width={40} height={40} />
        <span>{coins}.00</span>
      </p>
      <svg className="w-64 h-64 mx-auto mt-8" onPointerDown={handlePress}>
        <circle
          cx={128}
          cy={128}
          r={100}
          stroke="#ccffee"
          strokeWidth={4}
          fill="#119922"
        />
        <text
          x={90}
          y={140}
          stroke="white"
          fill="white"
          fontSize={32}
          fontWeight={700}
        >
          Press
        </text>
        <foreignObject
          ref={pointsRef}
          className="pointer-events-none translate-x-[40%]"
          width={256}
          height={256}
          x={-100}
        />
      </svg>
    </div>
  );
};
