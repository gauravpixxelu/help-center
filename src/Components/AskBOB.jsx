import React from 'react';
import { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import Ask1 from "../assets/icons/ask-1.svg"
import Ask2 from "../assets/icons/ask-2.svg"
import Ask3 from "../assets/icons/ask-3.svg"
import Ask4 from "../assets/icons/ask-4.svg"
import Ask5 from "../assets/icons/ask-5.svg"
import Work_bob1 from "../assets/icons/work-bob-1.svg"
import Work_bob2 from "../assets/icons/work-bob-2.svg"
import Work_bob3 from "../assets/icons/work-bob-3.svg"
import Work_bob4 from "../assets/icons/work-bob-4.svg"
import Work_bob5 from "../assets/icons/work-bob-5.svg"
import ChatGPTPopup from "../Components/ChatGPTPopup"




const AskBOB = () => {
    useEffect(() => {
        document.body.classList.add('ask-bob')
        return () => {
            document.body.classList.remove('ask-bob')
        }
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        

        <div className="ask-bob-page">

            {/* Meet BoB Section Starts */}

            <section className="meet-bob" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="meet-txt">
                                <h1>Meet BoB</h1>
                                <p className="hdng-18">The most powerful AI engine in the world is now available at your fingertips. Bob (Business optimisation Bot), is a powerful language processing tool. It is a type of artificial intelligence (AI) that is designed to understand and generate natural human language.</p>
                                {/* <NavLink href="#" className="custom-btn"><span>Learn More</span></NavLink> */}
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="meet-image">
                                <img src="images/bot.png" alt="" />
                                <div className="meet-box box-1">
                                    <img src={Ask1} alt="Ask1" />
                                    <p>Improved decision making</p>
                                </div>

                                <div className="meet-box box-2">
                                    <img src={Ask2} alt="Ask2" />
                                    <p>Enhanced communication & collaboration</p>
                                </div>

                                <div className="meet-box box-3">
                                    <img src={Ask3} alt="Ask3" />
                                    <p>Improved efficiency & productivity</p>
                                </div>

                                <div className="meet-box box-4">
                                    <img src={Ask4} alt="Ask4" />
                                    <p>Enhanced analysis & insights</p>
                                </div>

                                <div className="meet-box box-5">
                                    <img src={Ask5} alt="Ask5" />
                                    <p>Increased specialization and expertise</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Meet BoB Section Ends */}


            {/* Power of BoB Section Starts */}

            <section className="power-bob" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="power-image">
                                <img src="images/power-1.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="power-txt">
                                <p>The power of BoB cannot be overstated. It is built on 175 billion parameters, each of which can be adjusted to improve the performance of the AI model. BoB is trained on vast amounts of data, including websites, texts, books, articles and other content. It has been designed to understand and generate natural human language, allowing you to talk to it just as you would ask a friend a question.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Power of BoB Section Ends */}

            {/* AI systems BoB Section Starts */}

            <section className="power-bob ai" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="power-txt">
                                <p>BoB’s AI systems are able to identify and classify different industries based on patterns and characteristics in data, while also being able to perform more complex tasks such as analysing industry trends and predicting future outcomes.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="power-image">
                                <img src="images/power-2.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI systems BoB Section Ends */}

            {/* Power of BoB Section Starts */}

            <section className="power-bob" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="power-image">
                                <img src="images/power-3.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="power-txt">
                                <p>Some common types of business industries BoB specialises in include; Manufacturing, Retail, Service, Agriculture, Construction, Energy, Transportation and Technology</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Power of BoB Section Ends */}

            {/* Work Section Starts */}
            
            <section className="work-bob" >
                <div className="container">
                    <h2 className="sec-hdng">BoB has the potential to work with business consultants to improve business performance in a number of ways:</h2>
                    <div className="row">
                       <div className="col-md-3">
                        <div className="work-img">
                        <img src="images/work-bot.png" alt="" />
                        </div>
                       </div>
                       <div className="col-md-9">
                        <div className="work-txt">
                            <div className="work-txt-hdngs">
                            <h5 className="sec-hdng">Improved efficiency and productivity</h5>
                            <p className="hdng-16">BoB can help consultants automate routine tasks and processes, freeing up more time for high-value work such as strategy development and problem solving.</p>
                            </div>
                            <div className="work-txt-img">
                            <img src={Work_bob1} alt="" />
                            </div>
                        </div>

                        <div className="work-txt">
                            <div className="work-txt-hdngs">
                            <h5 className="sec-hdng">Enhanced analysis and insights</h5>
                            <p className="hdng-16">BoB’s tools can help consultants analyse and interpret large amounts of data more quickly and accurately, providing insights and recommendations that may not have been apparent otherwise.</p>
                            </div>
                            <div className="work-txt-img">
                            <img src={Work_bob2} alt="" />
                            </div>
                        </div>

                        <div className="work-txt">
                            <div className="work-txt-hdngs">
                            <h5 className="sec-hdng">Enhanced communication and collaboration</h5>
                            <p className="hdng-16">BoB’s tools can facilitate communication and collaboration among consultants and clients, allowing them to work more effectively together regardless of location.</p>
                            </div>
                            <div className="work-txt-img">
                            <img src={Work_bob3} alt="" />
                            </div>
                        </div>

                        <div className="work-txt">
                            <div className="work-txt-hdngs">
                            <h5 className="sec-hdng">Increased specialization and expertise</h5>
                            <p className="hdng-16">BoB can help consultants specialize in particular areas by providing access to a wide range of information and analysis that may not be readily available to them otherwise.</p>
                            </div>
                            <div className="work-txt-img">
                            <img src={Work_bob4} alt="" />
                            </div>
                        </div>

                        <div className="work-txt">
                            <div className="work-txt-hdngs">
                            <h5 className="sec-hdng">Improved efficiency and productivity</h5>
                            <p className="hdng-16">BoB can help consultants automate routine tasks and processes, freeing up more time for high-value work such as strategy development and problem solving.</p>
                            </div>
                            <div className="work-txt-img">
                            <img src={Work_bob5} alt="" />
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
            </section>

            {/* Work Section Ends */}

            {/* Try Now Section Starts */}

            <section className="try-bob" >
                <div className="container">
                    <div className="try-bob-txt">
                        <p>Overall, bob can help business consultants be more efficient, effective, and insightful in their work, enabling them to provide better value to their clients and improve business performance.</p>
                        <NavLink href="#" className="custom-btn"><span>Try It Now</span></NavLink>
                    </div>
                </div>
            </section>

            {/* Try Now Section Ends */}


            <ChatGPTPopup />


        </div>

    )
}


export default AskBOB