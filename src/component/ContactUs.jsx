import React, { useRef, useState } from 'react';
import './contactStyle.css';
import emailjs from 'emailjs-com';

function ContactUs() {
    const form = useRef();
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_x5mc1en', 'template_i2f2fi2', form.current, 'Xp9-zPSsXom-0cwzT')
            .then((result) => {
                console.log(result.text);
                setMessage('Your message has been sent successfully!');
                form.current.reset();
            }, (error) => {
                console.log(error.text);
                setMessage('An error occurred, please try again.');
            });
    };

    return (
        <>
            <div className="form-container">
                <form className="form" ref={form} onSubmit={sendEmail}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input required name="email" id="email" type="text" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="textarea">How Can I Help You?</label>
                        <textarea
                            required
                            cols="50"
                            rows="10"
                            id="textarea"
                            name="textarea"
                        >
                        </textarea>
                    </div>
                    <button type="submit" className="form-submit-btn" style={{ marginLeft: '30%' }}>
                        Submit
                    </button>
                </form>
                {message && <p>{message}</p>}
            </div>
        </>
    );
}

export default ContactUs;
