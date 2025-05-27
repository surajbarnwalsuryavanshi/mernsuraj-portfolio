import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss"
import { DiMongodb, DiNodejs } from "react-icons/di";
import { FaReact, FaJsSquare } from "react-icons/fa";
import { LiaReact, LiaNode } from "react-icons/lia";


const personalDetails = [
    {
        label: "Name",
        value: "Suraj Kumar Barnwal",
    },
    {
        label: "Address",
        value: "Kolkata, India",
    },
    {
        label: "Email",
        value: "surajbarnwalsuryavanshi@gmail.com",
    },
    {
        label: "Contact No",
        value: "+91 777 988 8069",
    },
]

const jobSummary = "Passionate and detail-oriented Full Stack Developer with a strong foundation in the MERN stack (MongoDB, Express.js, React.js, Node.js). Experienced in building responsive and dynamic web applications, with hands-on proficiency in JavaScript (ES6), API integration, and UI frameworks like Material UI and Bootstrap. Skilled at both frontend and backend development, with practical exposure through real-world projects including weather and game applications. Currently enhancing professional experience through an internship at Vyrazu Labs, focusing on code quality, automation, and collaborative development. Eager to contribute to innovative tech environments with a strong problem-solving mindset and a continuous learning attitude.";

const About = () => {
    return (
        <section id="about" className="about">
            <PageHeaderContent
                headerText="About Me"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="about__content">

                <div className="about__content__personalWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(-900px)',
                        }}
                        end={{
                            transform: 'translateX(0px)',
                        }}
                    >

                        <h3>Full Stack Developer</h3>
                        <p>{jobSummary}</p>

                    </Animate>

                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(500px)',
                        }}
                        end={{
                            transform: 'translateX(0px)',
                        }}
                    >

                        <h3 className="personalInformationHeaderText">Personal Information</h3>
                        <ul>
                            {
                                personalDetails.map((item, index) => (
                                    <li key={index}>
                                        <span className="title">{item.label}:</span>
                                        <span className="value">{item.value}</span>
                                    </li>
                                ))
                            }
                        </ul>

                    </Animate>
                </div>

                <div className="about__content__servicesWrapper">

                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(600px)',
                        }}
                        end={{
                            transform: 'translateX(0px)',
                        }}
                    >
                        <div className="about__content__servicesWrapper__innerContent">
                            <div>
                                <DiMongodb size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                            <div>
                                <FaJsSquare size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                            <div>
                                <LiaNode size={90} color="var(--yellow-theme-main-color)" />
                            </div>
                            <div>
                                <LiaReact size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                        </div>

                    </Animate>
                </div>

            </div>
        </section>
    );
}
export default About;