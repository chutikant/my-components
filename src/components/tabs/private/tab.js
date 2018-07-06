/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */
/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */

/* eslint-disable jsx-a11y/no-interactive-element-to-noninteractive-role */

// # TabItem Component

// ## Dependencies

// ### React
import React from 'react';
//import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';

// ### classNames
import classNames from 'classnames';

// ## Constants
import { TAB } from '../../../utilities/constants';

const displayName = TAB
const propTypes = {

    className: PropTypes.string,
    id: PropTypes.string,
    selected: PropTypes.bool,
    activeTabClassName: PropTypes.string,
    panelId: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    variant: PropTypes.oneOf(['default', 'scoped']),
}

const defaultProps = {
    focus: false,
    selected: false,
    activeTabClassName: "selected", //'slds-active',
    disabledTabClassName: 'slds-disabled',
    variant: 'default',
};


class Tab extends React.Component {

    render() {
        const {
            selected,
            disabled,
            panelId,
            activeTabClassName,
            disabledTabClassName,
            className,
            children,
            id,
            variant,
        } = this.props;

        let tabIndex;

        if (selected) {
            tabIndex = '0';
        } else if (disabled) {
            tabIndex = '-1';
        } else {
            tabIndex = null;
        }

        return (
            <li
                role="tab"
                ref={(node) => {
                    this.node = node;
                }}
                tabIndex={tabIndex}
                id={id}
                title={typeof children === 'string' ? children : null}
            >
                <a
                    className={classNames({
                        [activeTabClassName]: selected,
                        'tabbar-item my-tab-menu': variant === 'default',
                        'tabbar-item my-tab-menu-scoped': variant === 'scoped',
                    })}
                    href="javascript:void(0);" // eslint-disable-line no-script-url
                    role="presentation"
                    tabIndex="-1"
                >
                    {children}
                </a>
            </li>
        );
    }
}

Tab.defaultProps = defaultProps;
export default Tab;