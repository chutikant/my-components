
// ### React
import React from 'react';
import PropTypes from 'prop-types';

// ### classNames
import classNames from 'classnames';
import { TAB_PANEL } from '../../../utilities/constants';

/**
 * The containers of content that are shown and hidden by `Tabs`.
 */

const propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.object,
		PropTypes.string,
	]),

	className: PropTypes.string,
	id: PropTypes.string,
	selected: PropTypes.bool,
	variant: PropTypes.oneOf(['default', 'scoped']),
	tabId: PropTypes.string,
} 

const defaultProps = {
    variant: 'default',
	selected: false
}

const TabPanel = ({
	className,
	children,
	variant,
	selected,
	id,
	tabId
}) => (
	<div
		aria-labelledby={tabId}
		className={classNames(className, {
			'tab-panel-show': selected,
			'tab-panel-hide': !selected,
			'waiting-for-css': variant === 'default',
			'waiting-for-css-scoped': variant === 'scoped',
		})}
		id={id}
		role="tabpanel"
	>
		{children.props.children} 
	</div>
);

TabPanel.displayName = TAB_PANEL
TabPanel.propTypes = propTypes
TabPanel.defaultProps = defaultProps

export default TabPanel;