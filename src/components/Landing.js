import React from "react";
import {
    LandingSection,
    LandingWrapper,
    LeftSideContent,
    RightSideContent,
} from "../styles/landing/Landing";
import faker from "faker";
import { Button } from "./Button";

const Landing = () => {
    return (
        <LandingSection>
            <LandingWrapper>
                <LeftSideContent>
                    <h1>{faker.company.catchPhrase()}</h1>
                    <p>{faker.lorem.paragraphs()}</p>
                    <p>{faker.lorem.paragraphs()}</p>
                    <Button primary="true">label</Button>
                </LeftSideContent>
                <RightSideContent>
                    <img src={faker.image.image()} alt="landing" />
                </RightSideContent>
            </LandingWrapper>
            <LandingWrapper>
                <RightSideContent>
                    <img src={faker.image.image()} alt="landing" />
                </RightSideContent>
                <LeftSideContent>
                    <h1>{faker.company.catchPhrase()}</h1>
                    <p>{faker.lorem.paragraphs()}</p>
                    <p>{faker.lorem.paragraphs()}</p>
                    <Button primary="true">label</Button>
                </LeftSideContent>
            </LandingWrapper>
        </LandingSection>
    );
};

export default Landing;
