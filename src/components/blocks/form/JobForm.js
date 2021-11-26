// IMPORT NEXT JS / THIRD PARTY IMPORT
import React, { useState } from 'react';
import axios from 'axios';
import TagManager from 'react-gtm-module';
import { useRouter } from 'next/router';

// IMPORT MIXED COMPONENTS
import styles from '@styles/components/Blocks.module.scss';
import Button from '@components/blocks/button/Button';
import MediaDetector from '@components/blocks/unique/MediaDetector';
import { QUERY_ALL_COUNTRIES } from '@data/countries';

export default function JobForm({ title, mediaUrl, altText, job }) {
    if (!title && !mediaUrl) {
        return null;
    }

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const [phone, setPhone] = useState('');
    const [cv, setCv] = useState(false);
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

        if (job === 'Free application' ? !country : country) {
            setError('Please enter a valid COUNTRY');
            return null;
        }
        if (!phone) {
            setError('Please enter a valid PHONE');
            return null;
        }

        if (!cv) {
            setError(
                'Please upload your CV and only .pdf, .doc, .docx, ppt, pptx'
            );
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
        setError('');
        const hubspot_response = await submit_hubspot_form(
            job,
            fname,
            lname,
            email,
            country,
            phone,
            cv,
            message,
            newsletter,
            condition
        );

        setSuccess(hubspot_response.data.inlineMessage); //message output
        setFname('');
        setLname('');
        setEmail('');
        setCountry('');
        setPhone('');
        setCv('');
        setMessage('');
        setNewsletter('');
        setCondition('');
        const tagManagerArgs = {
            dataLayer: {
                event: 'SendForm',
                formtype: 'Careers',
            },
        };
        TagManager.dataLayer(tagManagerArgs);
    };
    const submit_hubspot_form = async (
        job,
        fname,
        lname,
        email,
        country,
        phone,
        cv,
        message,
        newsletter,
        condition
    ) => {
        const HUBSPOT_PORTAL_ID = '25092435'; // Replace this
        const HUBSPOT_FORM_GUID = '794fe01b-c04d-4903-9957-6b56eb9fa9c2'; // Replace this
        // const HUBSPOT_API_KEY = 'eu1-d6fa-536d-4480-980c-9b8b1273b7ac'; // Replace this
        const config = {
            // important!
            headers: {
                'Content-Type': 'application/json',
            },
        };

        //UPLOAD FILE
        // var fileOptions = {
        //     access: 'PUBLIC_INDEXABLE',
        //     ttl: 'P3M',
        //     overwrite: false,
        //     duplicateValidationStrategy: 'NONE',
        //     duplicateValidationScope: 'ENTIRE_PORTAL',
        // };

        // var formData = {
        //     file: fs.createReadStream(cv),
        //     options: JSON.stringify(fileOptions),
        //     folderPath: 'CVs',
        // };

        // const responseFile = await axios.post(
        //     `https://api.hubapi.com/filemanager/api/v3/files/${HUBSPOT_PORTAL_ID}/replace?hapikey=${HUBSPOT_API_KEY}`,
        //     {
        //         HUBSPOT_PORTAL_ID,
        //         HUBSPOT_API_KEY,
        //         url: postUrl,
        //         formData: formData,
        //     },
        //     config
        // );

        const response = await axios.post(
            `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`,
            {
                HUBSPOT_PORTAL_ID,
                HUBSPOT_FORM_GUID,
                fields: [
                    {
                        name: 'jobtitle',
                        value: job,
                    },
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
                        name: 'country',
                        value: country,
                    },
                    {
                        name: 'phone',
                        value: phone,
                    },
                    {
                        name: 'cv',
                        value: cv,
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
        <div id="job" className={styles.information_form}>
            <div className={styles.information_form_wrapper}>
                <span className="text-block">Contact us for a</span>
                <h2>
                    {title ? title : 'Information form'}
                    <span>.</span>
                </h2>

                <form id="information-form">
                    <input type="text" value={job} name="job" hidden />

                    <input
                        className={styles.fname}
                        type="text"
                        id="fname"
                        value={fname}
                        name="fname"
                        onChange={(e) => setFname(e.target.value)}
                        placeholder="First Name"
                    />
                    <input
                        className={styles.fsurname}
                        type="text"
                        id="fsurname"
                        value={lname}
                        name="lname"
                        onChange={(e) => setLname(e.target.value)}
                        placeholder="Last Name"
                    />
                    <input
                        className={styles.femail}
                        type="email"
                        id="email"
                        value={email}
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                    {job === 'Free application' && (
                        <select
                            className={styles.fcountry}
                            id="country"
                            value={country}
                            name="country"
                            onChange={(e) => setCountry(e.target.value)}
                        >
                            <option value="" disabled selected>
                                Country
                            </option>
                            {QUERY_ALL_COUNTRIES.map((country) => {
                                return (
                                    <option
                                        key={country.code}
                                        value={country.name}
                                    >
                                        {country.name}
                                    </option>
                                );
                            })}
                        </select>
                    )}

                    <div
                        className={styles.middle_field_group}
                        style={{ marginTop: '-1.1rem' }}
                    >
                        <label className="text-block">UPLOUD CV</label>
                        <input
                            className={styles.faddress}
                            type="file"
                            accept=".pdf,.doc,docx,ppt,pptx"
                            id="cv"
                            // value={cv}
                            name="filename"
                            onChange={(e) => setCv(e.target.value)}
                            placeholder="UPLOAD CV"
                        />
                    </div>
                    <input
                        className={styles.fphonenumber}
                        type="tel"
                        id="fphonenumber"
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Phone number"
                    />

                    <div className={styles.fmessage_wrapper}>
                        <div className={styles.fmessage_stripe}></div>
                        <div className={styles.fmessage_stripe}></div>
                        <textarea
                            className={styles.fmessage}
                            id="fmessage"
                            value={message}
                            name="message"
                            onChange={(e) => setMessage(e.target.value)}
                            form="contact-form"
                            placeholder="For what do you want to apply?"
                        ></textarea>
                    </div>

                    <div className={styles.checkbox_wrapper}>
                        <div>
                            <input
                                type="checkbox"
                                id="fsubscribe"
                                name="newsletter"
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
                                name="conditions"
                                onClick={handleConditions}
                            />
                            <label htmlFor="fconditions">
                                I have read and agree to the
                                <a
                                    href="https://www.vanquish-yachts.com/wp-content/uploads/2018/06/privacy-statement-en-9.pdf"
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    Privacy Statement
                                </a>
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
                    title={title}
                    mediaUrl={mediaUrl}
                    altText={altText}
                />
            </div>
        </div>
    );
}
