import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { GiSkills } from "react-icons/gi";
import { skillsData } from "./utils";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import { Line } from "rc-progress";
import "./styles.scss";

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <PageHeaderContent
                headerText="My Skills"
                icon={<GiSkills size={40} />}
            />

            <div className="skills__content-wrapper">

                {
                    skillsData.map((skill, index) => (
                        <div className="skills__content-wrapper__inner-content" key={index}>
                            <Animate
                                play
                                duration={1}
                                delay={0.3}
                                start={{
                                    transform: 'translateX(-200px)',
                                }}
                                end={{
                                    transform: 'translateX(0px)',
                                }}
                            >

                                <h3 className="skills__content-wrapper__inner-content__category-text">{skill.label}</h3>

                                <div className="skills__content-wrapper__inner-content__progressbar-container">
                                    {
                                        skill.data.map((skillItem, j) => (
                                            <AnimateKeyframes
                                                play
                                                duration={1}
                                                keyframes={["opacity: 1", "opacity: 0"]}
                                                iterationCount="1"
                                            >

                                                <div className="progressbar-wrapper" key={j}>
                                                    <p>{skillItem.skillName}</p>
                                                    <Line
                                                        percent={skillItem.percentage}
                                                        strokeWidth="2"
                                                        strokeColor="var(--yellow-theme-main-color)"
                                                        trailWidth="2"
                                                        strokeLinecap="square"
                                                    />
                                                </div>

                                            </AnimateKeyframes>
                                        ))
                                    }
                                </div>

                            </Animate>
                        </div>
                    ))
                }

            </div>
        </section>
    );
}
export default Skills;