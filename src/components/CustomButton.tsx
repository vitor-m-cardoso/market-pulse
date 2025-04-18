import { Button, ButtonProps } from '@mui/material';

export enum ButtonColorType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
  QUATERNARY = 'quaternary',
}

export interface CustomButtonProps extends ButtonProps {
  text: string,
  colorType: ButtonColorType,
  handleClick: () => void,
}

export const CustomButton: React.FC<CustomButtonProps> = ({ text, colorType, handleClick, ...props }) => {
  const className = `background-color-${colorType}`;
  return (
    <Button onClick={handleClick} variant='contained' className={className} {...props}>
      <strong>{text}</strong>
    </Button>
  )
}
