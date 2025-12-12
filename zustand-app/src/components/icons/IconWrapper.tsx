import type { IIconProps } from '../../shared/icons';

export interface IProps extends IIconProps {
  children: React.ReactNode;
}

export default function IconWrapper({
  children,
  width = 640,
  height = 640,
  viewBoxList = [0, 0, 640, 640],
  ...rest
}: IProps) {
  const viewBox = viewBoxList.join(' ');

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      {...rest}
    >
      {children}
    </svg>
  );
}
