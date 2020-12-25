import styled from "@emotion/styled";
import {
  space,
  layout,
  typography,
  color,
  flexbox,
  position,
  border,
  background,
  compose,
} from "styled-system";
import css from "@styled-system/css";

const base = (props) => css(props.__css)(props.theme);

export const Box = styled("div")(
  {
    boxSizing: "border-box",
    margin: 0,
    minWidth: "0px",
  },
  base,
  (props) => props.css,
  compose(
    space,
    border,
    layout,
    typography,
    color,
    flexbox,
    position,
    background
  )
);

export const Flex = styled(Box)`
  display: flex;
`;
