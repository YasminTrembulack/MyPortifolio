import { Art } from "./AsciiArt.styles";

type Props = {
  children: React.ReactNode;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  font_size?: string;
  line_height?: string;
  color?: string;
  useGradient?: boolean;
  animation?: boolean;
};

export function AsciiArt({ children, ...props }: Props) {
  return <Art {...props}>{children}</Art>;
}
