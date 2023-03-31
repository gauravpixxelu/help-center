import React from 'react';
import { useEffect } from 'react';

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
                                        <li><a href="#">Business Builder</a></li>
                                        <li><a href="#">Growth Accelerator</a></li>
                                        <li><a href="/turn-around-recovery">Turn Around And Recovery</a></li>
                                        <li><a href="#">Access to Market</a></li>
                                        <li><a href="/strategy-consulting">Strategy Consulting</a></li>
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
                                        <li><a href="#">Business Builder</a></li>
                                        <li><a href="#">Growth Accelerator</a></li>
                                        <li><a href="#">Turn Around And Recovery</a></li>
                                        <li><a href="#">Access to Market</a></li>
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
                                        <li><a href="pdf/business-builder-consultants.pdf" target="_blank">Business Builder Consultants</a></li>
                                        <li><a href="/pdf/business-builder-ceo-md-founder.pdf" target="_blank">Business Builder CEO/MD/Founder</a></li>
                                        <li><a href="/pdf/growth-accelerator-consultants.pdf" target="_blank">Growth Accelerator Consultants</a></li>
                                        <li><a href="/pdf/growth-accelerator-ceo-md-founder.pdf" target="_blank">Growth Accelerator CEO/MD/Founder</a></li>
                                        <li><a href="/pdf/8-step-to-consulting-success.pdf" target="_blank">8 Steps to Consulting Success</a></li>
                                        <li><a href="/pdf/okr-guide.pdf" target="_blank">OKR Guide</a></li>
                                        <li><a href="/pdf/sale-process.pdf" target="_blank">Sales Process</a></li>
                                        <li><a href="/consulting-manual">Consulting Manual</a></li>
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
                                        <li><a href="/ask-bob">Ask Bob for solutions to business problems</a></li>
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