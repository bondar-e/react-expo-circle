export type Sector = {
  id: number;
  largeArcFlag: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  color: string;
};

export type CircleProps = {
  numberOfSectors?: number;
  changeCurrentSector: (sector: Sector) => void;
};
