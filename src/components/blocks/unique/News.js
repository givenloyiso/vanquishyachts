// NEXT JS / THIRD PARTY IMPORT
import { React } from 'react';
import Image from 'next/image';

//IMPORT MIXED COMPONENTS
import styles from '@styles/components/Blocks.module.scss';
import Button from '@components/blocks/button/Button';
import placeholder from 'public/static/images/news.png';

export default function News({
    textBlock,
    title,
    dataArray,
    btnTitle,
    btnUrl,
    btnStyle,
    btnPosition,
}) {
    if (!Array.isArray(dataArray)) {
        return null;
    }

    return (
        <div className={styles.unique_news_section}>
            <div className={styles.grid_wrap}>
                <div className={styles.top_title}>
                    <p className="text-block">{textBlock}</p>
                    <h2>
                        {title}
                        <span>.</span>
                    </h2>
                </div>
                <div key={dataArray[0].id} className={styles.featured}>
                    <div className={styles.img_wrap}>
                        {/* // TODO: Dit nog veranderen naar mediaDetector */}
                        <Image
                            src={placeholder}
                            alt={title}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="right"
                        />
                    </div>
                    <div className={styles.content}>
                        <p className="text-block">
                            {dataArray[0].categories.edges[0].node.name}
                        </p>
                        <h3>{dataArray[0].title}</h3>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: dataArray[0].excerpt,
                            }}
                        />
                    </div>
                    <div className={styles.bottom}>
                        <p>
                            {new Date(dataArray[0].date).toLocaleDateString(
                                'nl-NL',
                                {
                                    year: 'numeric',
                                    month: 'long',
                                    day: '2-digit',
                                }
                            )}
                        </p>
                        <Button
                            title="read article"
                            url={`/news/${dataArray[0].slug}`}
                            style="3"
                            position="right"
                            alt={dataArray[0].title}
                        />
                    </div>
                </div>
                <div key={dataArray[2].id} className={styles.second_recent}>
                    <div className={styles.content}>
                        <p className="text-block">
                            {dataArray[2].categories.edges[0].node.name}
                        </p>
                        <h3>{dataArray[2].title}</h3>
                    </div>
                    <div className={styles.bottom}>
                        <Button
                            title="read article"
                            url={`/news/${dataArray[2].slug}`}
                            style="3"
                            position="right"
                            alt={dataArray[2].title}
                        />
                    </div>
                </div>
                <div key={dataArray[3].id} className={styles.last_recent}>
                    <div className={styles.content}>
                        <p className="text-block">
                            {dataArray[3].categories.edges[0].node.name}
                        </p>
                        <h3>{dataArray[3].title}</h3>
                    </div>
                    <div className={styles.bottom}>
                        <Button
                            title="read article"
                            url={`/news/${dataArray[3].slug}`}
                            style="3"
                            position="right"
                            alt={dataArray[3].title}
                        />
                    </div>
                </div>
                <div key={dataArray[1].id} className={styles.first_recent}>
                    <div className={styles.content}>
                        <p className="text-block">
                            {dataArray[1].categories.edges[0].node.name}
                        </p>
                        <h3>{dataArray[1].title}</h3>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: dataArray[1].excerpt,
                            }}
                        />
                    </div>
                    <div className={styles.bottom}>
                        <p>
                            {new Date(dataArray[0].date).toLocaleDateString(
                                'nl-NL',
                                {
                                    year: 'numeric',
                                    month: 'long',
                                    day: '2-digit',
                                }
                            )}
                        </p>
                        <Button
                            title="read article"
                            url={`/news/${dataArray[1].slug}`}
                            style="3"
                            position="right"
                            alt={dataArray[1].title}
                        />
                    </div>
                </div>
            </div>
            <Button
                title={btnTitle}
                url={btnUrl}
                style={btnStyle}
                position={btnPosition}
            />
        </div>
    );
}
