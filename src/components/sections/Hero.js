import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import SmoothScroll from '../elements/SmoothScroll';

const propTypes = {
    ...SectionProps.types,
};

const defaultProps = {
    ...SectionProps.defaults,
};

const Hero = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    ...props
}) => {
    const outerClasses = classNames(
        'hero section center-content',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className,
    );

    const innerClasses = classNames(
        'hero-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider',
    );

    return (
        <section {...props} className={outerClasses}>
            <div className="container-sm">
                <div className={innerClasses}>
                    <div className="hero-content">
                        <h1
                            className="mt-0 mb-16 reveal-from-bottom"
                            data-reveal-delay="200"
                        >
                            Marcelo{' '}
                            <span className="text-color-primary">Mena</span>
                        </h1>
                        <div className="container-xs">
                            <p
                                className="m-0 mb-32 reveal-from-bottom title"
                                data-reveal-delay="400"
                            >
                                Front-End Developer
                            </p>
                            <div
                                className="reveal-from-bottom"
                                data-reveal-delay="600"
                            >
                                <ButtonGroup>
                                    <SmoothScroll to="about" duration="700">
                                        <Button
                                            tag="a"
                                            color="primary"
                                            wideMobile
                                        >
                                            About me
                                        </Button>
                                    </SmoothScroll>

                                    <Button
                                        tag="a"
                                        color="dark"
                                        wideMobile
                                        href="https://github.com/arcmena"
                                    >
                                        My Github
                                    </Button>
                                </ButtonGroup>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
