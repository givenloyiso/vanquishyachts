// IMPORT NEXT JS / THIRD PARTY IMPORT
import React, { useState } from 'react';
import axios from 'axios';
import TagManager from 'react-gtm-module';
import { useRouter } from 'next/router';

// IMPORT MIXED COMPONENTS
import styles from '@styles/components/Blocks.module.scss';
import Button from '@components/blocks/button/Button';
import MediaDetector from '@components/blocks/unique/MediaDetector';

export default function ContactForm({ title, mediaUrl, altText }) {
    if (!title && !mediaUrl) {
        return null;
    }

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [newsletter, setNewsletter] = useState(false);
    const [condition, setCondition] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const router = useRouter();

    const handleNewsletter = () => {
        setNewsletter(!newsletter);
    };

    const handleConditions = () => {
        setCondition(!condition);
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // prevent form submit default behavior

        if (!fname) {
            setError('Please enter your NAME');
            return null;
        }

        if (!lname) {
            setError('Please enter your SURNAME');
            return null;
        }

        if (!email) {
            setError('Please enter a valid EMAIL address');
            return null;
        }

        if (!message) {
            setError('Please enter a valid MESSAGE');
            return null;
        }

        if (!condition) {
            setError('Please check the terms and condition');
            return null;
        }

        const hubspot_response = await submit_hubspot_form(
            fname,
            lname,
            email,
            message,
            newsletter,
            condition
        );

        setSuccess(hubspot_response.data.inlineMessage); //message output
        setFname('');
        setLname('');
        setMessage('');
        setEmail('');
        setNewsletter('');
        setCondition('');
        const tagManagerArgs = {
            dataLayer: {
                event: 'SendForm',
                formtype: 'Contact',
            },
        };
        TagManager.dataLayer(tagManagerArgs);
    };

    const submit_hubspot_form = async (
        fname,
        lname,
        email,
        message,
        newsletter,
        condition
    ) => {
        const HUBSPOT_PORTAL_ID = '25092435'; // Replace this
        const HUBSPOT_FORM_GUID = '4124b808-c587-4914-9dbd-cf1342f2f296'; // Replace this
        const config = {
            // important!
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await axios.post(
            `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`,
            {
                HUBSPOT_PORTAL_ID,
                HUBSPOT_FORM_GUID,
                fields: [
                    {
                        name: 'firstname',
                        value: fname,
                    },
                    {
                        name: 'lastname',
                        value: lname,
                    },
                    {
                        name: 'email',
                        value: email,
                    },
                    {
                        name: 'message',
                        value: message,
                    },
                ],
                context: {
                    pageUri: router.pathname,
                },
                legalConsentOptions: {
                    consent: {
                        consentToProcess: condition,
                        text: '   I have read and agree to the Terms and Conditions',
                        communications: [
                            {
                                value: newsletter,
                                subscriptionTypeId: 999,
                                text: 'I would like to subscribe to the newsletter',
                            },
                        ],
                    },
                },
            },
            config
        );
        return response;
    };

    return (
        <div id="contact" className={styles.contact_form}>
            <div className={styles.information_form_wrapper}>
                <span className="text-block">Get in contact </span>
                <h2>
                    {title ? title : 'Information request'} <span>.</span>
                </h2>

                <form id="information-form">
                    <input
                        className={styles.fname}
                        type="text"
                        id="fname"
                        name="fname"
                        placeholder="First Name"
                        value={fname}
                        onChange={(e) => setFname(e.target.value)}
                    />
                    <input
                        className={styles.fsurname}
                        type="text"
                        id="lname"
                        name="lname"
                        placeholder="Last Name"
                        value={lname}
                        onChange={(e) => setLname(e.target.value)}
                    />
                    <input
                        className={styles.femail}
                        type="email"
                        id="femail"
                        name="femail"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className={styles.fmessage_wrapper}>
                        <div className={styles.fmessage_stripe}></div>
                        <div className={styles.fmessage_stripe}></div>
                        <textarea
                            className={styles.fmessage}
                            id="fmessage"
                            name="fmessage"
                            form="contact-form"
                            placeholder="Write a message to us!"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>

                    <div className={styles.checkbox_wrapper}>
                        <div>
                            <input
                                type="checkbox"
                                id="fsubscribe"
                                name="fsubscribe"
                                onClick={handleNewsletter}
                            />
                            <label htmlFor="fsubscribe">
                                I would like to subscribe to the newsletter
                            </label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                id="fconditions"
                                name="fconditions"
                                onClick={handleConditions}
                            />
                            <label htmlFor="fconditions">
                                <span>
                                    I have read and agree to the{' '}
                                    <a
                                        href="https://www.vanquish-yachts.com/wp-content/uploads/2018/06/privacy-statement-en-9.pdf"
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        Privacy Statement
                                    </a>
                                </span>
                            </label>
                        </div>
                    </div>

                    {success ? (
                        <p
                            className={styles.message_box}
                            style={{ color: '#0c8e02', fontWeight: 'bold' }}
                            dangerouslySetInnerHTML={{
                                __html: success,
                            }}
                        />
                    ) : error ? (
                        <p
                            className={styles.message_box}
                            style={{ color: '#ff0000', fontWeight: 'bold' }}
                            dangerouslySetInnerHTML={{
                                __html: error,
                            }}
                        />
                    ) : (
                        ''
                    )}

                    <Button title="send" onClick={handleSubmit} />
                </form>
            </div>
            <div className={styles.form_image}>
                <MediaDetector
                    mediaUrl={mediaUrl}
                    title={title}
                    altText={altText}
                    imageLayout="fill"
                    imageObjectFit="cover"
                    imageObjectPosition="center"
                />
            </div>
        </div>
    );
}
