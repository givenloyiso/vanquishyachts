// NEXT JS / THIRD PARTY IMPORT
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow,
} from 'react-google-maps';

import { FiPhone, FiMail } from 'react-icons/fi';

//IMPORT MIXED COMPONENTS
import styles from '@styles/components/Blocks.module.scss';
import locationPin from 'public/static/images/locationPin.svg';
import locationPinActive from 'public/static/images/locationPin-active.svg';

export default function Locations({ dataArray, topPosition }) {
    const GOOGLE_MAPS_API = 'AIzaSyCApqX6TnjDtL55RPbiDzbmqXfk3-WbvJs';
    const MapStyles = [
        {
            elementType: 'labels.text.fill',
            stylers: [
                {
                    visibility: 'off',
                },
            ],
        },
        {
            elementType: 'labels.text.stroke',
            stylers: [
                {
                    visibility: 'off',
                },
            ],
        },
        {
            featureType: 'administrative',
            elementType: 'geometry.stroke',
            stylers: [
                {
                    visibility: 'off',
                },
            ],
        },
        {
            featureType: 'administrative.land_parcel',
            elementType: 'geometry.stroke',
            stylers: [
                {
                    visibility: 'off',
                },
            ],
        },
        {
            featureType: 'administrative.land_parcel',
            elementType: 'labels.text.fill',
            stylers: [
                {
                    visibility: 'off',
                },
            ],
        },
        {
            featureType: 'landscape.natural',
            elementType: 'geometry',
            stylers: [
                {
                    visibility: 'off',
                },
            ],
        },
        {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [
                {
                    visibility: 'off',
                },
            ],
        },
        {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [
                {
                    visibility: 'off',
                },
            ],
        },
        {
            featureType: 'poi.park',
            elementType: 'geometry.fill',
            stylers: [
                {
                    visibility: 'off',
                },
            ],
        },
        {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [
                {
                    visibility: 'off',
                },
            ],
        },
        {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [
                {
                    visibility: 'off',
                },
            ],
        },
        {
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [
                {
                    visibility: 'off',
                },
            ],
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [
                {
                    visibility: 'off',
                },
            ],
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [
                {
                    visibility: 'off',
                },
            ],
        },
        {
            featureType: 'road.highway.controlled_access',
            elementType: 'geometry',
            stylers: [
                {
                    visibility: 'off',
                },
            ],
        },
        {
            featureType: 'road.highway.controlled_access',
            elementType: 'geometry.stroke',
            stylers: [
                {
                    visibility: 'off',
                },
            ],
        },
        {
            featureType: 'road.local',
            elementType: 'labels.text.fill',
            stylers: [
                {
                    visibility: 'off',
                },
            ],
        },
        {
            featureType: 'transit.line',
            elementType: 'geometry',
            stylers: [
                {
                    visibility: 'off',
                },
            ],
        },
        {
            featureType: 'transit.line',
            elementType: 'labels.text.fill',
            stylers: [
                {
                    visibility: 'off',
                },
            ],
        },
        {
            featureType: 'transit.line',
            elementType: 'labels.text.stroke',
            stylers: [
                {
                    visibility: 'off',
                },
            ],
        },
        {
            featureType: 'transit.station',
            elementType: 'geometry',
            stylers: [
                {
                    visibility: 'off',
                },
            ],
        },
        {
            featureType: 'water',
            elementType: 'geometry.fill',
            stylers: [
                {
                    color: '#ffffff',
                },
            ],
        },
        {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [
                {
                    color: '#ffffff',
                },
            ],
        },
    ];

    const prevCountRef = useRef();
    const [markClick, setMarkClick] = useState(false);
    // const [defaultLocation, SetDefaultLocation] = useState({
    //     lat: 30,
    //     lng: -40,
    // });
    const loadingElementStyle = { height: '100%' };
    const containerElementStyle = { height: '100%' };
    const mapElementStyle = { height: '100%' };
    const defaultOptions = {
        scrollwheel: false,
        styles: MapStyles,
        disableDefaultUI: false,
        mapTypeControl: true,
        streetViewControl: false,
    };

    const handleMarkClick = (e) => {
        setMarkClick(e);
    };
    const eventsRef = useRef(0);

    const sliderResize = () => {
        let widthEvents = eventsRef.current.offsetWidth;
        const [width, setWidth] = useState(widthEvents ? widthEvents : 0); // default width, detect on server.
        // eslint-disable-next-line react-hooks/exhaustive-deps
        const handleResize = () => setWidth(window.innerWidth);

        if (width === 0) {
            if (widthEvents < 769) {
                var eventCount = 1.5;
            } else if (widthEvents > 766 && widthEvents < 1400) {
                var eventCount = 3.6;
            } else {
                var eventCount = 3.6;
            }
        } else {
            if (widthEvents < 769) {
                var eventCount = 1.5;
            } else if (widthEvents > 766 && widthEvents < 1400) {
                var eventCount = 3.6;
            } else {
                var eventCount = 3.6;
            }
        }

        useEffect(() => {
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, [handleResize]);

        return eventCount;
    };

    if (!Array.isArray(dataArray)) {
        return null;
    }

    const cn = (...classNames) => classNames.join(' ');

    const RegularMap = withScriptjs(
        withGoogleMap(() => (
            <GoogleMap
                defaultZoom={sliderResize()}
                defaultCenter={{
                    lat: 30,
                    lng: -40,
                }}
                defaultOptions={defaultOptions}
            >
                {dataArray &&
                    dataArray.length > 0 &&
                    dataArray.map((LocationMark) => (
                        <Marker
                            id={`Marker_Location_${LocationMark.title
                                .split(' ')
                                .join('_')}`}
                            ref={prevCountRef}
                            className={
                                markClick === LocationMark.id
                                    ? cn(styles.marker, styles.marker_active)
                                    : styles.marker
                            }
                            position={{
                                lat: LocationMark.CF_Location.address
                                    ? LocationMark.CF_Location.address.latitude
                                    : 40,
                                lng: LocationMark.CF_Location.address
                                    ? LocationMark.CF_Location.address.longitude
                                    : -40,
                            }}
                            title={LocationMark.title}
                            onClick={() => handleMarkClick(LocationMark.id)}
                            key={LocationMark.id}
                            animation={
                                markClick === LocationMark.id
                                    ? google.maps.Animation.BOUNCE
                                    : ''
                            }
                            icon={
                                markClick === LocationMark.id
                                    ? locationPinActive.src
                                    : locationPin.src
                            }
                        >
                            {markClick === LocationMark.id && (
                                <InfoWindow onCloseClick={() => handleMarkClick(null)}>
                                    <div
                                        id="Marker_Information"
                                        className={styles.info_window}
                                    >
                                        <div className={styles.title}>
                                            <p className="text-block">
                                                Full service hub
                                            </p>
                                            <h3>{LocationMark.title}</h3>
                                        </div>
                                        <div className={styles.content}>
                                            <p>
                                                {
                                                    LocationMark.CF_Location
                                                        .address.streetAddress
                                                }
                                                <br />
                                                {
                                                    LocationMark.CF_Location
                                                        .address.state
                                                }
                                                <br />
                                                {
                                                    LocationMark.CF_Location
                                                        .address.country
                                                }
                                                <br />
                                            </p>
                                        </div>
                                        <div className={styles.contact}>
                                            <p className="text-block">
                                                Email us
                                            </p>
                                            <span>
                                                <FiMail />
                                                <Link
                                                    href={`mailto:${LocationMark.CF_Location.email}`}
                                                >
                                                    <a>
                                                        {
                                                            LocationMark
                                                                .CF_Location
                                                                .email
                                                        }
                                                    </a>
                                                </Link>
                                            </span>

                                            <p className="text-block">
                                                Call us
                                            </p>
                                            <p>
                                                <FiPhone />
                                                <Link
                                                    href={`tel:+${LocationMark.CF_Location.phone}`}
                                                >
                                                    <a>
                                                        +
                                                        {
                                                            LocationMark
                                                                .CF_Location
                                                                .phone
                                                        }
                                                    </a>
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </InfoWindow>
                            )}
                        </Marker>
                    ))}
            </GoogleMap>
        ))
    );
    return (
        <div ref={eventsRef} className={styles.locations_section} id="map">
            <h3 className={styles.heading} style={{ top: topPosition }}>
                Yacht that matches your demands
                <br /> and desires<span>.</span>
            </h3>
            <RegularMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API}`}
                loadingElement={<div style={loadingElementStyle} />}
                containerElement={<div style={containerElementStyle} />}
                mapElement={<div style={mapElementStyle} />}
            />
        </div>
    );
}
