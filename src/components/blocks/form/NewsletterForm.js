// IMPORT NEXT JS / THIRD PARTY IMPORT
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import TagManager from 'react-gtm-module';

//IMPORT MIXED COMPONENTS
import styles from '@styles/components/Blocks.module.scss';
import Button from '@components/blocks/button/Button';
import MediaDetector from '@components/blocks/unique/MediaDetector';

export default function NewsletterForm({ title, mediaUrl, altText }) {
    if (!title && !mediaUrl) {
        return null;
    }
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [condition, setCondition] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const router = useRouter();

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

        if (!condition) {
            setError('Please check the terms and condition');
            return null;
        }

        const hubspot_response = await submit_hubspot_form(
            fname,
            lname,
            email,
            condition
        );

        setFname('');
        setLname('');
        setEmail('');
        setCondition('');
        setSuccess(hubspot_response.data.inlineMessage); //message output
        const tagManagerArgs = {
            dataLayer: {
                event: 'SendForm',
                formtype: 'Newsletter',
            },
        };
        TagManager.dataLayer(tagManagerArgs);
    };

    const submit_hubspot_form = async (fname, lname, email, condition) => {
        const HUBSPOT_PORTAL_ID = '25092435'; // Replace this
        const HUBSPOT_FORM_GUID = 'a9de4fce-861a-42e6-8533-4f11b8d9648c'; // Replace this
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
                ],
                context: {
                    pageUri: router.pathname,
                },
                legalConsentOptions: {
                    consent: {
                        consentToProcess: condition,
                        text: 'I have read and agree to the Terms and Conditions',
                    },
                },
                subscriptionDefinitions: {
                    active: true,
                    portalId: HUBSPOT_PORTAL_ID,
                    description: 'Newsletter',
                    // id: 7,
                    name: 'Default',
                },
            },
            config
        );
        return response;
    };
    return (
        <div id="newsletter" className={styles.newsletter_section}>
            <div className={styles.form_wrap}>
                <div className={styles.title_group}>
                    <p className="text-block">get in touch</p>
                    <h2>
                        Newsletter<span>.</span>
                    </h2>
                </div>
                <div className={styles.top_field_group}>
                    <input
                        type="text"
                        placeholder="Your name"
                        name="fname"
                        value={fname}
                        onChange={(e) => setFname(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Your surname"
                        name="lname"
                        value={lname}
                        onChange={(e) => setLname(e.target.value)}
                    />
                </div>
                <div className={styles.middle_field_group}>
                    <input
                        type="email"
                        placeholder="Your email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className={styles.bottom_field_group}>
                    <label className="checkbox">
                        <span>
                            I have read the and agree with the
                            <a
                                href="https://www.vanquish-yachts.com/wp-content/uploads/2018/06/privacy-statement-en-9.pdf"
                                rel="noreferrer"
                                target="_blank"
                            >
                                Privacy Statement
                            </a>
                        </span>

                        <input
                            type="checkbox"
                            id="Condintion"
                            name="Condintion"
                            value="Condintion"
                            onClick={handleConditions}
                        />
                        <span className="checkmark"></span>
                    </label>
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

                <div className={styles.block_button}>
                    <Button title="send" submitForm={handleSubmit} />
                </div>
            </div>

            <div className={styles.image_wrap}>
                <MediaDetector
                    title={title}
                    mediaUrl={mediaUrl}
                    altText={altText}
                />
            </div>
        </div>
    );
}
