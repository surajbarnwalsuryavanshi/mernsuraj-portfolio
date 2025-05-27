import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { MdConnectWithoutContact } from "react-icons/md";
import { Animate } from "react-simple-animate";
import "./styles.scss";

const Contact = () => {

    const sendMail = "mailto:surajbarnwalsuryavanshi@gmail.com";
    const callMe = "tel:+917779888069";


    return (
        <section id="contact" className="contact">
            <PageHeaderContent
                headerText="Contact Me!"
                icon={<MdConnectWithoutContact size={40} />}
            />
            <div className="contact__content">
                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{
                        transform: "translateX(-200px)"
                    }}
                    end={{
                        transform: "translateX(0px)"
                    }}
                >

                    <h3 className="contact__content__header-text">Let's Talk</h3>

                </Animate>

                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{
                        transform: "translateX(200px)"
                    }}
                    end={{
                        transform: "translateX(0px)"
                    }}
                >

                    <div className="contact__content__form">
                        <div className="contact__content__form__controlswrapper">
                            <div>
                                <input required type="text" name="name" className="inputName" />
                                <label htmlFor="name" className="nameLabel">Name</label>
                            </div>
                            <div>
                                <input required type="text" name="eamil" className="inputEmail" />
                                <label htmlFor="email" className="emailLabel">Email</label>
                            </div>
                            <div>
                                <textarea required type="text" name="description" className="inputDescription" rows={5} />
                                <label htmlFor="description" className="descriptionLabel">Description</label>
                            </div>
                        </div>
                        <button>Submit</button>
                    </div>

                </Animate>
            </div>
        </section>
    );
}
export default Contact;