// IMPORT NEXT JS / THIRD PARTY IMPORT
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

//* IMPORT QUERY DATA
// META
// import { QUERY_ALL_STATES_US } from '@data/continent';

export default function CountryBrandSwitch({ type, all, us }) {
    const [continent, setContinent] = useState(false);

    useEffect(() => {
        fetch('https://pro.ip-api.com/json?key=mnqNYv5PMPa2tgo&fields=continent')
            .then((res) => res.json())
            .then((response) => {
                setContinent(response.continent);
            })
            .catch(() => {
                setContinent(false);
            });
    }, []);

    return (
        <>
            {type === 'logo' ? (
                continent === 'North America' && us ? (
                    <Link href="/" scroll={false} passHref>
                        <a>
                            <Image
                                src={us}
                                alt="Vanquish Yachts Logo"
                                width={187}
                                height={31}
                            />
                        </a>
                    </Link>
                ) : (
                    <Link href="/" scroll={false} passHref>
                        <a>
                            <Image
                                src={all}
                                alt="VQ Yachts Logo"
                                width={187}
                                height={31}
                            />
                        </a>
                    </Link>
                )
            ) : continent === 'North America' && us ? (
                us
            ) : (
                all
            )}
        </>
    );
}
