import styled, { css } from "styled-components";
import theme from "styles/theme";

export type HeadLineProps = {
  color?: keyof typeof theme.colors;
  size?: keyof typeof theme.font.sizes;
  fontWeight?: keyof typeof theme.font.weight;
  lineHeight?: keyof typeof theme.font.lines;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
};

export const HeadLine = styled("h1").attrs<HeadLineProps>(({ level }) => ({
  as: `h${level}`,
}))<HeadLineProps>`
  ${({
    theme,
    color = "texts",
    size = "small",
    fontWeight = "base",
    lineHeight = "small",
  }) => css`
    font-size: ${theme.font.sizes[size]};
    color: ${theme.colors[color]};
    font-weight: ${theme.font.weight[fontWeight]};
    line-height: ${theme.font.lines[lineHeight]};
  `}
`;
