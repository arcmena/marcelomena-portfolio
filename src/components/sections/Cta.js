import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Button from '../elements/Button';

const propTypes = {
    ...SectionProps.types,
    split: PropTypes.bool,
};

const defaultProps = {
    ...SectionProps.defaults,
    split: false,
};

const Cta = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    split,
    ...props
}) => {
    const outerClasses = classNames(
        'cta section center-content-mobile reveal-from-bottom',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className,
    );

    const innerClasses = classNames(
        'cta-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider',
        split && 'cta-split',
        'cta-container',
    );

    return (
        <section {...props} className={outerClasses}>
            <div className="container">
                <div className={innerClasses}>
                    <div className="cta-slogan">
                        <h3 className="m-0">Contact me at</h3>
                    </div>
                    <div className="cta-action">
                        <Button className="cta-button">aasd</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;
