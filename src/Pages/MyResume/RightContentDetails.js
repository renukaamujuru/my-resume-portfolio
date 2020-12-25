import { Fragment } from "react";
import { Text, Container, Section } from "Components";

const RightContentDetails = ({ type, ele, ...other }) => {
    let content = null;
    if (type === "profile") {
        content =
            ele.map(item => {
                return (
                    <Text as="h5" key={item} type={type}>{item}</Text>
                )
            })

    }
    else if (type === 'work History') {
        content =
            Object.entries(ele).map(([WorkHistoryKeys, WorkHistoryVal]) => {
                return Object.entries(WorkHistoryVal).map(([CompanyKeys, CompanyVal]) => {
                    return (
                        <Fragment key={CompanyKeys}>
                            {
                                CompanyKeys === 'duration' ?
                                    <Container key={CompanyKeys} type={CompanyKeys}>
                                        <Text as="h3" type={type}>{CompanyVal}</Text>
                                    </Container>
                                    :
                                    <Container key={CompanyKeys}>
                                        {CompanyKeys === 'role' ?
                                            <Text as="h5" type={type}>{CompanyVal}</Text>
                                            :
                                            <Text as="h6" type={type}>{CompanyVal}</Text>}
                                    </Container>
                            }
                        </Fragment>
                    )
                })
            })
    }
    else if (type === "education") {
        content =
            Object.entries(ele).map(([EducationKeys, EducationVal]) => {
                return (
                    <Fragment key={EducationKeys}>
                        <Text as="h5" type={type}>{EducationKeys}</Text>
                        <Text as="h6" type={type}>{EducationVal}</Text>
                    </Fragment>
                )
            })
    }
    else if (type === 'recent Professional Experience') {
        content =
            Object.entries(ele).map(([WorkHistoryKeys, WorkHistoryVal], index) => {
                return (
                    <Section key={index} variant = {type} style={{flexDirection: "column"}}>
                        {Object.entries(WorkHistoryVal).map(([CompanyKeys, CompanyVal]) => {
                            return (
                                <Container key={CompanyKeys} type={type}> 
                                 {
                                 CompanyKeys === "projectName" ? 
                                 <Text as="h3" type={type}>{CompanyVal}</Text>
                                 :
                                 CompanyKeys === "role" ? 
                                 <Text as="h3" type={type}>{CompanyVal}</Text>
                                 :
                                 CompanyKeys === "duration" ? 
                                 <Text as="h4" type={type}>{CompanyVal}</Text>
                                 :
                                 CompanyKeys === "description" ? 
                                 <Text as="h5" type={type}>{CompanyVal}</Text>
                                 :
                                 CompanyKeys === "contribution" ? 
                                 <Text as="h6" type={type}>{CompanyVal}</Text>
                                 : ''
                                 }
                                </Container>
                            )
                        })}
                    </Section>
                )
            })
    }
    return (
        <Fragment>
            { type !== "profile" ?
                <Fragment>
                    <Text as="h1" type={type}>{type}</Text>
                    {content}
                </Fragment>
                : <Fragment>{content}</Fragment>}
        </Fragment>
    );
}
export default RightContentDetails;