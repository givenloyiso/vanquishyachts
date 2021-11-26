// NEXT JS / THIRD PARTY IMPORT
import React from 'react';
import Link from 'next/link';
import { CgArrowLongRight } from 'react-icons/cg';
import { RiArrowDropDownLine } from 'react-icons/ri';

// IMPORT MIXED COMPONENTS
import styles from '@styles/components/Button.module.scss';

function Button({ title, url, style, target, position, submitForm, onClick }) {
    const cn = (...classNames) => classNames.join(' ');

    switch (style) {
    case '2':
        var switch_style = styles.button_2;
        break;
    case '3':
        var switch_style = styles.button_3;
        break;
    case '4':
        var switch_style = styles.button_4;
        break;
    case '5':
        var switch_style = styles.button_5;
        break;
    case '6':
        var switch_style = styles.button_6;
        break;
    case '7':
        var switch_style = styles.button_7;
        break;
    default:
        var switch_style = styles.button_1;
        break;
    }

    switch (position) {
    case 'center':
        var switch_position = styles.position_center;
        break;
    case 'right':
        var switch_position = styles.position_right;
        break;
    default:
        break;
    }

    if (!title) {
        return null;
    }
    return (
        <>
            {submitForm ? (
                <button
                    className={cn(switch_style, switch_position)}
                    onClick={submitForm}
                    title={title ? title : null}
                >
                    <span className={styles.button_text}>{title}</span>

                    <CgArrowLongRight size={20} />
                </button>
            ) : url && !submitForm ? (
                <Link href={url ? url : '/'}>
                    <a
                        className={cn(switch_style, switch_position)}
                        target={target}
                        title={title ? title : null}
                    >
                        <span className={styles.button_text}>
                            {' '}
                            {title ? title : null}
                        </span>

                        <CgArrowLongRight size={20} />
                    </a>
                </Link>
            ) : (
                <span
                    onClick={onClick}
                    className={cn(switch_style, switch_position)}
                    style={{ gridColumn: '1/3' }}
                >
                    <span className={styles.button_text}>
                        {title ? title : null}
                    </span>

                    {switch_style === styles.button_5 ? (
                        <RiArrowDropDownLine size={40} />
                    ) : (
                        <CgArrowLongRight size={20} />
                    )}
                </span>
            )}
        </>
    );
}

export default Button;
