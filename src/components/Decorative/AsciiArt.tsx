import { ArtText, ArtImage } from "./AsciiArt.styles";

type BaseProps = {
  $top?: string;
  $right?: string;
  $bottom?: string;
  $left?: string;
  $animation?: boolean;
};

type TextArtProps = BaseProps & {
  $children?: React.ReactNode;
  $font_size?: string;
  $line_height?: string;
  $color?: string;
  $useGradient?: boolean;
  $src?: never;
};

type ImageArtProps = BaseProps & {
  $src: string;
  $alt?: string;
  $width?: string;
  $height?: string;
  $opacity?: string;
  $children?: never;
};

type Props = TextArtProps | ImageArtProps;

export function AsciiArt({ $src, $children, ...props }: Props) {
  if ($src) {
    return <ArtImage {...props} src={$src} />;
  }

  return <ArtText {...props}>{$children}</ArtText>;
}
