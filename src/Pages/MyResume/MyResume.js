import React from "react";
import { Container, Section } from "Components";
import { ResumeDetails } from "Constants/MyResumeData";
import LeftContentDetails from "Pages/MyResume/LeftContentDetails";
import RightContentDetails from "Pages/MyResume/RightContentDetails";
const MyResume = (props) => {
    return (
        <Container>
            {
                Object.entries(ResumeDetails).map(([key, val]) => {
                    return (
                        key === 'leftContainer' ?
                            <Section key={key} variant={key} style={{ flexDirection: "column" }}>
                                {Object.entries(val).map(([keyName, ele]) => {
                                    return (
                                        <LeftContentDetails key={keyName} type={keyName} ele={ele} />
                                    )
                                })}
                            </Section>
                            : <Section key={key} variant={key} style={{ flexDirection: "column" }}>
                                {Object.entries(val).map(([keyName, ele]) => {
                                    return (
                                        <RightContentDetails key={keyName} type={keyName} ele={ele} />
                                    )
                                })}
                            </Section>
                    )
                })
            }
        </Container>
    )
}
export default MyResume;
