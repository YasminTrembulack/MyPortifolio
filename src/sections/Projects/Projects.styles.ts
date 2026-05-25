import styled from "styled-components";
import { badgeVariants, type BadgeVariant } from "../../sections/Projects/badge.types";

/* Actions */
export const ActionButtons = styled.div`
  display: flex;
  gap: 8px;
  z-index: 2;
`;

export const IconButton = styled.button`
  background: transparent;
  border: none;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;

  color: ${({ theme }) => theme.colors.greyLight};
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.blueMuted};
    color: ${({ theme }) => theme.colors.white};
    transform: translateY(-2px);
  }

  svg {
    width: 20px;
    height: 20px;
    fill: currentColor;
  }
`;

/* Tags */
export const TagWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  z-index: 2;
`;

export const Badge = styled.span<{ $variant?: BadgeVariant }>`
  font-family: ${({ theme }) => theme.fonts.decorative};
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 6px;

  background: ${({ $variant = "default" }) => badgeVariants[$variant].bg};
  color: ${({ $variant = "default" }) => badgeVariants[$variant].color};
  border: 1px solid
    ${({ $variant = "default" }) => badgeVariants[$variant].border};

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 0 12px
      ${({ $variant = "default" }) => badgeVariants[$variant].glow};
  }
`;