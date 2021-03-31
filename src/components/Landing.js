import React from "react";
import {
    LandingSection,
    LandingWrapper,
    LeftSideContent,
    MiddleImage,
    RightSideContent,
} from "../styles/landing/Landing";
import faker from "faker";
import { Button } from "./Button";

const Landing = () => {
    return (
        <LandingSection>
            <LandingWrapper>
                <LeftSideContent style={{ borderRight: "1px solid red" }}>
                    <h1>{faker.company.catchPhrase()}</h1>
                    <p>{faker.lorem.paragraphs()}</p>
                    <p>{faker.lorem.paragraphs()}</p>
                    <Button primary="true">label</Button>
                </LeftSideContent>

                <RightSideContent>
                    <img
                        className="landing-img"
                        src={faker.image.image()}
                        alt="landing"
                    />
                </RightSideContent>
            </LandingWrapper>
            <MiddleImage ></MiddleImage>

            <LandingWrapper>
                <RightSideContent style={{ borderRight: "1px solid red" }}>
                    <img
                        className="landing-img"
                        src={faker.image.image()}
                        alt="landing"
                    />
                </RightSideContent>
                <br />
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
