import styled from "styled-components";
import { fadeRight, type AnimationProps } from "../../../styles/transitions";

export type AsciiProps = AnimationProps & {
    isDragging: boolean
    $positionX: number;
    $positionY: number;
}


export const Ascii = styled.pre<AsciiProps>`
    ${fadeRight}
    position: absolute;

    left: ${({ $positionX }) => $positionX}%;
    top: ${({ $positionY }) => $positionY}%;

    white-space: pre;
    font-family: monospace;

    font-size: 4px;
    line-height: 0.45;
    background: radial-gradient(ellipse 65% 500% at 52% 50%,#cf9f23 35%,#1a77ad 45%,#0ea5e9 100%);

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;

    user-select: none;
    cursor: ${({ isDragging }) => isDragging ? "grabbing" : "grab"};
    transform: translate(-50%, -50%);
    margin: 0;
    filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.4));
`;
