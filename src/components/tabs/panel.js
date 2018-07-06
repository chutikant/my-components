/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */
/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */

import React from 'react';
import PropTypes from 'prop-types';

import { TABS_PANEL } from '../../utilities/constants';

const Panel = ({ children }) =><div className="ssss">{React.Children.toArray(children)}</div>;

Panel.displayName = TABS_PANEL;

Panel.propTypes = {
	label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.element,
	]).isRequired,
};

export default Panel;