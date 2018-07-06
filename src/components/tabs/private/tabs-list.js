import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { TABS_LIST } from '../../../utilities/constants';

const propTypes = {
	id: PropTypes.string,
	className: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.object,
		PropTypes.string,
	]),
	children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
	variant: PropTypes.oneOf(['default', 'scoped'])
}

const TabsList = ({ id, className, children, variant }) => (
	<ul
		id={`${id}-slds-tabs__nav`}
		className={classNames(className, {
			'b-block-tabbar': variant === 'default',
			'b-block-tabbar-scoped': variant === 'scoped',
		})}
		role="tablist"
	>
		{children}
	</ul>
);

TabsList.displayName = TABS_LIST;
TabsList.propTypes = propTypes

export default TabsList;