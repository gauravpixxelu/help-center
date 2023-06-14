import React from 'react';
import { useEffect } from 'react';
import { NavLink } from "react-router-dom";
const HelpCenter = () => {
    useEffect(() => {
        document.body.classList.add('help-center')
        return () => {
            document.body.classList.remove('help-center')
        }
    }, [])
    return (

        <div className="help-page">

            {/* Help Center Starts */}

            <section className="help">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="help-txt">
                                <div className="help-txt-img">
                                    <img src="images/help-1.jpg" alt="" />
                                </div>
                                <div className="help-txt-content">
                                    <h5 className="hdng-h5 ">Consultant Help</h5>
                                    <ul className="site-ul">                                        
                                        <li><NavLink to="/business-builder">Business Builder</NavLink></li>
                                        <li><NavLink to="/growth-accelerator">Growth Accelerator</NavLink></li>
                                        <li><NavLink to="/turn-around-recovery">Turn Around And Recovery</NavLink></li>
                                        <li><NavLink to="/access-to-market">Access to Market</NavLink></li>
                                        <li><NavLink to="/strategy-consulting">Strategy Consulting</NavLink></li>
                                        <li><NavLink to="/consulting-manual">Consulting Manual</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="help-txt">
                                <div className="help-txt-img">
                                    <img src="images/help-2.jpg" alt="" />
                                </div>
                                <div className="help-txt-content">
                                    <h5 className="hdng-h5 ">CEO/MD/Founder Help</h5>
                                    <ul className="site-ul">
                                        <li><NavLink to="/ceo-business-builder">Business Builder</NavLink></li>
                                        <li><NavLink to="/ceo-growth-accelerator">Growth Accelerator</NavLink></li>
                                        <li><NavLink to="/ceo-turn-around-recovery">Turn Around And Recovery</NavLink></li>
                                        <li><NavLink to="/ceo-access-to-market">Access to Market</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="help-txt">
                                <div className="help-txt-img">
                                    <img src="images/help-3.jpg" alt="" />
                                </div>
                                <div className="help-txt-content">
                                    <h5 className="hdng-h5 ">Training Manuals</h5>
                                    <ul className="site-ul">
                                        <li><a href="pdf/business-builder-consultants.pdf" target="_blank" download>Business Builder Consultants</a></li>
                                        <li><a href="/pdf/business-builder-ceo-md-founder.pdf" target="_blank" download>Business Builder CEO/MD/Founder</a></li>
                                        <li><a href="/pdf/growth-accelerator-consultants.pdf" target="_blank" download>Growth Accelerator Consultants</a></li>
                                        <li><a href="/pdf/growth-accelerator-ceo-md-founder.pdf" target="_blank" download>Growth Accelerator CEO/MD/Founder</a></li>
                                        <li><a href="/pdf/8-step-to-consulting-success.pdf" target="_blank" download>8 Steps to Consulting Success</a></li>
                                        <li><a href="/pdf/okr-guide.pdf" target="_blank" download>OKR Guide</a></li>
                                        <li><a href="/pdf/sale-process.pdf" target="_blank" download>Sales Process</a></li>
                                        <li><a href="/pdf/business-diagnostic-call-script.pdf" target="_blank" download>Business Diagnostic Call Script</a></li>
                                        <li><a href="/pdf/business-builder-diagnostic.pdf" target="_blank" download>Business Builder Diagnostic</a></li>
                                        <li><a href="/pdf/growth-accelerator-diagnostic.pdf" target="_blank" download>Growth Accelerator Diagnostic</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="help-txt">
                                <div className="help-txt-img">
                                    <img src="images/help-4.jpg" alt="" />
                                </div>
                                <div className="help-txt-content">
                                    <h5 className="hdng-h5 ">Business optimisation Bot (BoB)</h5>
                                    <ul className="site-ul">
                                        <li><NavLink to="/ask-bob">Ask Bob for solutions to business problems</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Help Center Starts */}


        </div>

    )
}


export default HelpCenter