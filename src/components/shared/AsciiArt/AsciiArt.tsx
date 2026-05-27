import { ArtText, type ArtTextProps } from "./AsciiArt.styles";

type AsciiArtProps = ArtTextProps & {
  children: string;
}

export default function AsciiArt({children, ...props}: AsciiArtProps) {
  return <ArtText {...props}>{children}</ArtText>;
}
