import type { SVGAttributes } from 'react';

export interface IIconProps extends SVGAttributes<SVGElement> {
  viewBoxList?: [number, number, number, number];
}
