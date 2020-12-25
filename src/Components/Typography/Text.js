import React, { forwardRef } from 'react';
import { Box } from 'Components/Receipe';
import styled from "@emotion/styled";

const TextStyles = styled(Box)`
font-family: "Century Gothic";
   ${(props) => ({ as, type, theme }) => {
      if (type === "name") {
         return {
            fontSize: "28px",
            lineHeight: "35px",
         }
      }
      if (type === "profession") {
         return {
            fontSize: '14px',
            paddingTop: '3px',
            color: theme.NobelColor,
            lineHeight: '18px',
            fontWeight: "400"
         }
      }
      if (type === "contact" || type === "skills") {
         let commonStyles = {};
         commonStyles.lineHeight = "18px";
         commonStyles.fontSize = "11px";
         if (as === "h3") {
            commonStyles.marginTop = "5px";
            commonStyles.fontWeight = type === "contact" ? "700" : "400";
            return commonStyles;
         }
         if (as === "h5") {
            commonStyles.fontWeight = "400";
            commonStyles.textTransform = "capitalize";
            if (type === "skills") {
               commonStyles.listStyleType = "disc";
               commonStyles.display = "list-item";
               commonStyles.marginLeft = "15px";
               commonStyles.color = theme.NobelColor;
            }
            return commonStyles;
         }
         if (as === "h2") {
            commonStyles.fontWeight = "700";
            commonStyles.textTransform = "capitalize";
            commonStyles.fontSize = "16px";
            return commonStyles;
         }
      }
      if (type === "profile") {
         if (as === "h1") {
            return {
               color: theme.leftContainer,
               textTransform: "capitalize",
               fontSize: "16px",
               fontWeight: "700",
               lineHeight: "22px",
            }
         }
         if (as === "h5") {
            return {
               color: theme.NobelColor,
               lineHeight: '18px',
               fontWeight: "400",
               fontSize: '14px',
            }
         }
      }
      if (type === "education") {
         if (as === "h1") {
            return {
               color: theme.leftContainer,
               textTransform: "capitalize",
               fontSize: "16px",
               fontWeight: "700",
               lineHeight: "22px",
               borderBottom: "1px solid" + theme.AthensGreyColor,
               borderTop: "1px solid" + theme.AthensGreyColor,
               padding: "5px 0",
               margin: "10px 0",
            }
         }
         if (as === "h5") {
            return {
               fontWeight: "700",
               color: theme.NobelColor,
               marginBottom: "4px",
               lineHeight: '18px',
               fontSize: '14px',
            }
         }
         if (as === "h6") {
            return {
               fontStyle: "italic",
               color: theme.NobelColor,
               lineHeight: '18px',
               fontWeight: "400",
               fontSize: '11px',
               marginBottom: "6px",
            }
         }

      }
      if (type === "work History") {
         if (as === "h3") {
            return {
               color: theme.NobelColor,
               fontSize: "11px",
               position: "absolute",
               left: "-92px",
               width: "60px",
               top: "-10px",
               lineHeight: "18px",
               fontWeight: "400",
               paddingTop: "10px",
               marginLeft: "91px",
            }
         }
         if (as === "h1") {
            return {
               marginLeft: "91px",
               color: theme.leftContainer,
               textTransform: "capitalize",
               fontSize: "16px",
               fontWeight: "700",
               lineHeight: "22px",
               borderBottom: "1px solid" + theme.AthensGreyColor,
               borderTop: "1px solid" + theme.AthensGreyColor,
               padding: "5px 0",
               margin: "20px 0 10px 0",
            }
         }
         if (as === "h5") {
            return {
               fontWeight: "700",
               color: theme.NobelColor,
               lineHeight: '18px',
               fontSize: '14px',
               marginLeft: "100px",
            }
         }
         if (as === "h6") {
            return {
               fontWeight: "400",
               color: theme.NobelColor,
               marginBottom: "10px",
               lineHeight: '18px',
               fontSize: '14px',
               marginLeft: "100px",
               fontStyle: "italic",
            }
         }
      }
      if (type === "recent Professional Experience") {
         let commonStyles = {};
         commonStyles.fontWeight = "400";
         commonStyles.color = theme.NobelColor;
         commonStyles.lineHeight = '18px';
         commonStyles.fontSize = '11px';
         if (as === "h1") {
            commonStyles.color = theme.leftContainer;
            commonStyles.textTransform = "capitalize";
            commonStyles.fontSize = "16px";
            commonStyles.fontWeight = "700";
            commonStyles.lineHeight = "22px";
            commonStyles.borderBottom = "1px solid" + theme.AthensGreyColor;
            commonStyles.borderTop = "1px solid" + theme.AthensGreyColor;
            commonStyles.padding = "5px 0";
            commonStyles.margin = "20px 0 10px 0";
         }
         if (as === "h3") {
            commonStyles.fontWeight = "700";
            commonStyles.marginBottom = "4px";
            commonStyles.fontSize = '14px';
         }
         if (as === "h4") {
            commonStyles.marginBottom = "4px";
         }
         if (as === "h5") {
            commonStyles.listStyleType = "disc";
            commonStyles.display = "list-item";
            commonStyles.marginLeft = "15px";
         }
         if (as === "h6") {
            commonStyles.marginBottom = "5px";
            commonStyles.fontStyle = "italic";
            commonStyles.listStyleType = "disc";
            commonStyles.display = "list-item";
            commonStyles.marginLeft = "15px";
         }
         return commonStyles;
      }
   }}
`;

const Text = forwardRef(function Text({ ...other }, ref) {
   return <TextStyles {...other} ref={ref} />
})

export default Text;
