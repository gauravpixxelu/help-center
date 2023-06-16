import React, { useState, useEffect } from 'react';

const SupportForm = () => {
    const [name, setName] = useState('');
    const [contact_email, setEmail] = useState('');
    const [contact_number, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [thankmessage, setThank] = useState('');
    const [form_type, setFormType] = useState('');
    const [site_type, setSiteType] = useState('');
    const [page_type, setPageType] = useState('');

    useEffect(() => {
        setFormType(getFormType());
        setSiteType(getSiteType());
        setPageType(getPageType());
    }, []);

    const getFormType = () => {
        // Function to determine the form type based on the URL or any other logic
        // Return the determined form type
    };

    const getSiteType = () => {
        // Function to determine the site type based on the URL or any other logic
        // Return the determined site type
    };

    const getPageType = () => {
        // Function to determine the page type based on the URL or any other logic
        // Return the determined page type
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const data = {
            name,
            contact_email,
            contact_number,
            message,
            thankmessage,
            form_type: "support_request",
            site_type: "Help Center",
            page_type: "Help Header",
        };

        try {
            const response = await fetch(
                'https://pixxelu.com/dev/red3sixty/api/client-contact-us-email',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                }
            );
            const responseData = await response.json();
            console.log(responseData);
            setThank('Thank you for your message. It has been sent.');
            setName('');
            setEmail('');
            setPhone('');
            setMessage('');
        } catch (error) {
            console.log(error);
            setThank('Message failed to send. Please try again later.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="from-bottom">
            <div className="row">
                <div className="col-md-12">
                    <div className="form-feild">
                        <input
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="Name"
                            required
                        />
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="form-feild">
                        <input
                            type="email"
                            value={contact_email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Email"
                            required
                        />
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="form-feild">
                        <input
                            type="text"
                            value={contact_number}
                            onChange={e => setPhone(e.target.value)}
                            placeholder="Phone"
                        />
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="form-feild">
                        <textarea
                            type="textarea"
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            placeholder="Type Your Message Here..."
                        />
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="form-button">
                        <button type="submit" className="custom-btn">
                            <span>Submit</span>
                        </button>
                        {thankmessage && <p className="error-msg">{thankmessage}</p>}
                    </div>
                </div>
            </div>
        </form>
    );
};

export default SupportForm;
