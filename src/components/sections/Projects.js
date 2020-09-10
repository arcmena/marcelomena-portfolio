import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
    ...SectionSplitProps.types,
};

const defaultProps = {
    ...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    invertMobile,
    invertDesktop,
    alignTop,
    imageFill,
    ...props
}) => {
    const outerClasses = classNames(
        'features-split section',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className,
    );

    const innerClasses = classNames(
        'features-split-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider',
    );

    const splitClasses = classNames(
        'split-wrap',
        invertMobile && 'invert-mobile',
        invertDesktop && 'invert-desktop',
        alignTop && 'align-top',
    );

    const sectionHeader = {
        title: 'Projects',
        paragraph:
            "Some of my projects that I've been working on the last months.",
    };

    return (
        <section {...props} className={outerClasses}>
            <div className="container">
                <div className={innerClasses}>
                    <SectionHeader
                        data={sectionHeader}
                        className="center-content"
                    />
                    <div className={splitClasses}>
                        <div className="split-item">
                            <div
                                className="split-item-content center-content-mobile reveal-from-left"
                                data-reveal-container=".split-item"
                            >
                                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                                    Next.JS + React
                                </div>
                                <h3 className="mt-0 mb-12">Pokéfinder</h3>
                                <p className="m-0">
                                    A quick and reliable Pokédex for your
                                    Pokémon journey! Made using Next.JS
                                    framework to implement a SSG (Static Site
                                    Generation) solution in order to have
                                    lightspeed loadings times!
                                </p>
                            </div>
                            <div
                                className={classNames(
                                    'split-item-image center-content-mobile reveal-from-bottom',
                                    imageFill && 'split-item-image-fill',
                                )}
                                data-reveal-container=".split-item"
                            >
                                <Image
                                    src={require('./../../assets/images/pokefinder.png')}
                                    alt="Pokefinder"
                                    width="100"
                                    height="100"
                                />
                            </div>
                        </div>

                        <div className="split-item">
                            <div
                                className="split-item-content center-content-mobile reveal-from-right"
                                data-reveal-container=".split-item"
                            >
                                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                                    React Movie Social Media
                                </div>
                                <h3 className="mt-0 mb-12">Bloobuster</h3>
                                <p className="m-0">
                                    Bloobuster is an APP made to share tv shows
                                    and movies experiences. Here you can publish
                                    reviews, create posts and discuss about what
                                    you loved... or hated about them.
                                </p>
                            </div>
                            <div
                                className={classNames(
                                    'split-item-image center-content-mobile reveal-from-bottom',
                                    imageFill && 'split-item-image-fill',
                                )}
                                data-reveal-container=".split-item"
                            >
                                <Image
                                    src={require('./../../assets/images/Bloobuster.png')}
                                    alt="Features split 02"
                                    width={100}
                                    height={396}
                                />
                            </div>
                        </div>

                        <div className="split-item">
                            <div
                                className="split-item-content center-content-mobile reveal-from-left"
                                data-reveal-container=".split-item"
                            >
                                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                                    Lightning fast workflow
                                </div>
                                <h3 className="mt-0 mb-12">
                                    Data-driven insights
                                </h3>
                                <p className="m-0">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua
                                    — Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                </p>
                            </div>
                            <div
                                className={classNames(
                                    'split-item-image center-content-mobile reveal-from-bottom',
                                    imageFill && 'split-item-image-fill',
                                )}
                                data-reveal-container=".split-item"
                            >
                                <Image
                                    src={require('./../../assets/images/features-split-image-03.png')}
                                    alt="Features split 03"
                                    width={528}
                                    height={396}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
