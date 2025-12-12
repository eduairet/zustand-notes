import { BUTTON_COLORS, type ButtonColorsType } from '../shared/colors';
import Button from './Button';
import { ICONS, type Icon } from './icons';

interface IProps {
  icon: Icon;
  label: string;
  onClick: () => void;
  color?: ButtonColorsType;
}

export default function ButtonIcon({
  icon,
  label,
  onClick,
  color = BUTTON_COLORS.PRIMARY,
}: IProps) {
  const IconComponent = ICONS[icon];

  return (
    <Button
      type="button"
      className="w-8 h-8 p-1"
      color={color}
      aria-label={label}
      title={label}
      onClick={onClick}
    >
      <IconComponent width={18} height={18} aria-hidden="true" />
    </Button>
  );
}
