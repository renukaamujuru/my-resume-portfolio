import React, { forwardRef } from "react";
import { Flex } from "Components/Receipe";
import styled from "@emotion/styled";

const SectionStyles = styled(Flex)`
    height: "auto";
    overflow: "visible";
 ${(props) => ({ variant, theme }) => {
        if (variant === "leftContainer") {
            return {
                width: "320px",
                background: theme[variant],
                color: theme[variant + 'Text'],
                padding: "10px"
            }
        }
        if (variant === "rightContainer") {
            return {
                background: theme[variant],
                color: theme[variant + 'Text'],
                padding: "20px 15px",
                width: "-webkit-fill-available",
            }
        }
    }}
`;

const Section = forwardRef(function Section({ as = "section", ...other }, ref) {
    return <SectionStyles as={as} {...other} ref={ref} />
})

export default Section;
