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

export default function InformationForm({ title, mediaUrl, altText }) {
    if (!title && !mediaUrl) {
        return null;
    }

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const [address, setAddress] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [phone, setPhone] = useState('');
    const [callBack, setCallBack] = useState(false);
    const [location, setLocation] = useState('');
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

    const handleCallBack = () => {
        setCallBack(!callBack);
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

        if (!country) {
            setError('Please enter a valid COUNTRY');
            return null;
        }

        if (!address) {
            setError('Please enter a valid address');
            return null;
        }

        if (!zipcode) {
            setError('Please enter a valid ZIPCODE');
            return null;
        }

        if (!phone) {
            setError('Please enter a valid PHONE');
            return null;
        }

        if (!location) {
            setError('Please enter a valid LOCATION');
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
            fname,
            lname,
            email,
            country,
            address,
            zipcode,
            phone,
            callBack,
            location,
            message,
            newsletter,
            condition
        );

        setSuccess(hubspot_response.data.inlineMessage); //message output
        setFname('');
        setLname('');
        setEmail('');
        setCountry('');
        setAddress('');
        setZipcode('');
        setPhone('');
        setCallBack('');
        setLocation('');
        setMessage('');
        setNewsletter('');
        setCondition('');
        const tagManagerArgs = {
            dataLayer: {
                event: 'SendForm',
                formtype: 'Information',
            },
        };
        TagManager.dataLayer(tagManagerArgs);
    };

    const submit_hubspot_form = async (
        fname,
        lname,
        email,
        country,
        address,
        zipcode,
        phone,
        callBack,
        location,
        message,
        newsletter,
        condition
    ) => {
        const HUBSPOT_PORTAL_ID = '25092435'; // Replace this
        const HUBSPOT_FORM_GUID = 'ccec0883-bf75-45b6-844a-a212b6bea2e8'; // Replace this
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
                        name: 'country',
                        value: country,
                    },
                    {
                        name: 'address',
                        value: address,
                    },
                    {
                        name: 'zip',
                        value: zipcode,
                    },
                    {
                        name: 'phone',
                        value: phone,
                    },
                    {
                        name: 'call_back_request',
                        value: callBack,
                    },
                    {
                        name: 'sailing_location',
                        value: location,
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
        <div id="information" className={styles.information_form}>
            <div className={styles.information_form_wrapper}>
                <span className="text-block">Contact us for a</span>
                <h2>
                    {title ? title : 'Information form'}
                    <span>.</span>
                </h2>

                <form id="information-form">
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
                                <option key={country.code} value={country.name}>
                                    {country.name}
                                </option>
                            );
                        })}
                    </select>

                    <input
                        className={styles.faddress}
                        type="text"
                        id="faddress"
                        value={address}
                        name="address"
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Address"
                    />

                    <input
                        className={styles.fpostalcode}
                        type="text"
                        id="fpostalcode"
                        value={zipcode}
                        name="zipcode"
                        onChange={(e) => setZipcode(e.target.value)}
                        placeholder="Postal Code"
                    />

                    <div className={styles.callback_wrapper}>
                        <input
                            className={styles.fphonenumber}
                            type="tel"
                            id="fphonenumber"
                            name="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Phone"
                        />
                        <div className={styles.callback_request}>
                            <input
                                className={styles.fcallback}
                                type="checkbox"
                                id="fcallback"
                                name="fcallback"
                                onClick={handleCallBack}
                            />
                            <label htmlFor="fcallback">Call back request</label>
                        </div>
                    </div>

                    <select
                        className={styles.fsailinglocation}
                        id="sailing-location"
                        value={location}
                        name="location"
                        onChange={(e) => setLocation(e.target.value)}
                    >
                        <option value="" disabled selected>
                            Sailing Location
                        </option>
                        <option value="North Europe">North Europe</option>
                        <option value="South Europe">South Europe</option>
                        <option value="US East Coast">US East Coast</option>
                        <option value="US West Coast">US West Coast</option>
                        <option value="Middle East">Middle East</option>
                        <option value="Middle East">Other</option>
                    </select>

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
                            placeholder="Write a message to us!"
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
