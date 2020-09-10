import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string,
        paragraph: PropTypes.string,
    }).isRequired,
    children: PropTypes.node,
    tag: PropTypes.oneOf(['h1', 'h2', 'h3']),
};

const defaultProps = {
    children: null,
    tag: 'h2',
};

const SectionHeader = ({
    className,
    data,
    children,
    tag,
    elseClasses,
    sectionHeader,
    paragraphhStyles,
    ...props
}) => {
    const classes = classNames(
        sectionHeader && 'section-header',
        className,
        paragraphhStyles,
    );

    const Component = tag;

    return (
        <>
            {(data.title || data.paragraph) && (
                <div {...props} className={classes}>
                    <div className="container-xs">
                        {children}
                        {data.title && (
                            <Component
                                className={classNames(
                                    'mt-0',
                                    data.paragraph ? 'mb-16' : 'mb-0',
                                    `${elseClasses}`,
                                )}
                            >
                                {data.title}
                            </Component>
                        )}
                        {data.paragraph && (
                            <p className={`m-0 ${paragraphhStyles}`}>
                                {data.paragraph}
                            </p>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

SectionHeader.propTypes = propTypes;
SectionHeader.defaultProps = defaultProps;

export default SectionHeader;
