import { useRef } from 'react';

export default () => {
  const pointsRef = useRef<SVGForeignObjectElement>(null);
  const handlePress = (e: PointerEvent) => {
    const para = document.createElement('p');
    para.textContent = '+5';
    para.style.cssText =
      'position:absolute;width:fit-content;user-select:none;font-size:32px;font-weight:700;';
    const target = e.currentTarget as SVGSVGElement;
    pointsRef.current?.append(para);
    target.animate({ transform: 'translateY(3px)' }, 100);
    const anim = para.animate(
      { translate: ['0 60px', '0 40px'], opacity: [0, 1, 0] },
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
      {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
      <svg className="w-64 h-64 mx-auto mt-32" onPointerDown={handlePress}>
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
          width={60}
          height={200}
        />
      </svg>
    </div>
  );
};
