import React, { forwardRef } from "react";
import { Flex } from "Components/Receipe";
import styled from "@emotion/styled";

const LinkStyles = styled(Flex)`
  ${(props) => ({ type, theme }) => {
        if (type === "contact" || type === "skills") {
            return {
                position: "relative",
                zIndex: "1",
                margin: "20px 0 10px 0",
                "&:before": {
                    content: "''",
                    position: 'absolute',
                    left: '-10px',
                    top: '-5px',
                    background:  theme.leftContainer,
                    height: '30px',
                    width: 'calc(100% - -19px)',
                    filter: 'brightness(0.8)',
                    zIndex: '-1111111',
                },
            };
        }
        if (type === 'duration') {
            return {
                position: "relative"
            };
        }
    }}
  `;

const Container = forwardRef(function Container({ as = "div", ...other }, ref) {
    return <LinkStyles as={as} {...other} ref={ref} />
})

export default Container;