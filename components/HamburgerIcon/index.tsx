import { FC } from "react";

type Props = {
  color?: string;
  size?: string;
};

const getDimensions = (size: string) => {
  const dimensions: Record<string, number> = {
    minX: 0,
    minY: 0,
    boxWidth: 100,
    boxHeight: 80,
    width: 40,
    height: 40,
    y1: 30,
    y2: 60,
    barWidth: 100,
    barHeight: 20,
    rx: 3,
  };

  switch (size) {
    case "s":
      Object.keys(dimensions).forEach(
        (key) => (dimensions[key] = dimensions[key] / 2)
      );
      break;
    case "m":
      Object.keys(dimensions).forEach(
        (key) => (dimensions[key] = dimensions[key] / 1.5)
      );
      break;
    case "l":
      break;
    default:
      throw new Error("incorrect size for HamburgerIcon:" + size);
  }
  const {
    minX,
    minY,
    boxWidth,
    boxHeight,
    width,
    height,
    y1,
    y2,
    barWidth,
    barHeight,
    rx,
  } = dimensions;
  return {
    viewBox: `${minX} ${minY} ${boxWidth} ${boxHeight}`,
    width,
    height,
    y1,
    y2,
    barHeight,
    barWidth,
    rx,
  };
};

const HamburgerIcon: FC<Props> = ({ color = "#ededed", size = "s" }) => {
  const { viewBox, width, height, y1, y2, barHeight, barWidth, rx } =
    getDimensions(size);

  return (
    <svg viewBox={viewBox} width={width} height={height}>
      <rect fill={color} width={barWidth} height={barHeight} rx={rx}></rect>
      <rect
        fill={color}
        y={y1}
        width={barWidth}
        height={barHeight}
        rx={rx}
      ></rect>
      <rect
        fill={color}
        y={y2}
        width={barWidth}
        height={barHeight}
        rx={rx}
      ></rect>
    </svg>
  );
};

export default HamburgerIcon;
