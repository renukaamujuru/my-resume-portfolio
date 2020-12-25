import { Fragment } from "react";
import { Text, Container } from "Components";


const LeftContentDetails = ({ type, ele, ...other }) => {
    let content = null;

    if (type === "name" || type === "profession") {
        content =
            <Text as="h2" type={type}>{ele}</Text>
    } else if (type === "contact") {
        content =
            <Fragment >
                <Container type={type}>
                    <Text as="h2" type={type}>{type}</Text>
                </Container>
                {Object.entries(ele).map(([ContactKeys, ContactVal]) => {
                    return <Fragment key={ContactKeys}>
                        <Text as="h3" type={type}>{ContactKeys}</Text>
                        <Text as="h5" type={type}>{ContactVal}</Text>
                    </Fragment>
                })}
            </Fragment>
    }
    else if (type === 'skills') {
        content =
            <Fragment >
                <Container type={type}>
                    <Text as="h2" type={type}>{type}</Text>
                </Container>
                {Object.entries(ele).map(([SkillSetKeys, SkillSetVal]) => {
                    return <Fragment key={SkillSetKeys}>
                        <Text as="h3" type={type}>{SkillSetKeys}</Text>
                        {SkillSetVal.map(item => {
                            return (
                                <Text as="h5" type={type} key={item}> {item}</Text>
                            )
                        })}
                    </Fragment>
                })}
            </Fragment>
    }
    return content;
}

export default LeftContentDetails;