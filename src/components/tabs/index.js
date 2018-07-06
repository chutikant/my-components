import React from 'react'
import PropTypes from 'prop-types';

// ### isFunction
import { isNumber, isFunction } from 'lodash';
import shortid from 'shortid'
import classNames from 'classnames';
import '../../styles/tabs/tab.css';

// Child Components
import TabsList from './private/tabs-list';
import Tab from './private/tab';
import TabPanel from './panel';
// import TabPanel from './private/tab-panel';

import { TABS } from '../../utilities/constants';

const displayName = TABS;
const propTypes = {
	id: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.element,
	]).isRequired,
	className: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.object,
		PropTypes.string,
	]),
	defaultSelectedIndex: PropTypes.number,
	variant: PropTypes.oneOf(['default', 'scoped']),
};

const defaultProps = {
	defaultSelectedIndex: 0,
	variant: 'default',
};


class Tabs extends React.Component {
	tabs = []
	componentWillMount() {
		this.generatedId = shortid.generate();
		this.setState({
			selectedIndex: this.props.defaultSelectedIndex,
		});
	}

	getVariant() {
		return this.props.variant === 'scoped' ? 'scoped' : 'default';
	}

	getSelectedIndex() {
		return this.state.selectedIndex
	}

	getTabsCount() {
		return this.props.children ? React.Children.count(this.props.children) : 0;
	}

	setSelected(index) {
		// Check index boundary
		if (index < 0 || index >= this.getTabsCount()) {
			return;
		}
		if (index !== this.getSelectedIndex()) {
			this.setState({ selectedIndex: index });
		}
	}

	handleClick = (e) => {
		let node = e.target;   //<a>
		let tabList = node.parentNode.parentNode.children //<li>
		let targetTab = node.parentNode
		const index = [].slice.call(tabList).indexOf(targetTab);
		this.setSelected(index)
	}

	renderTabPanels(parentId) {
		const children = React.Children.toArray(this.props.children);
		const selectedIndex = this.getSelectedIndex();
		let result = null;
		result = children.map((child, index) => {
			const selected =  selectedIndex === index;
			if(selected === false) {
				return '';
			}
			const tabId = `${parentId}-slds-tabs--tab-${index}`;
			const id = `${parentId}-slds-tabs--panel-${index}`;
			const variant = this.getVariant();

			return (
				<TabPanel
					key={child.key}
					selected={selected}
					id={id}
					tabId={tabId}
					variant={variant}
					label={child.props.label}
				>
					{children[index]}
				</TabPanel>
			);
		});
		return result;
	}

	renderTabsList(parentId) {

		const children = React.Children.toArray(this.props.children);
		return (
			// `parentId` gets consumed by TabsList, adding a suffix of `-tabs__nav`
			<TabsList id={parentId} variant={this.getVariant()}>
				{children.map((child, index) => {
					const id = `${parentId}-slds-tabs--tab-${index}`;
					const panelId = `${parentId}-slds-tabs--panel-${index}`;
					const selected = this.getSelectedIndex() === index;
					const variant = this.getVariant();
					return (
						<Tab
							key={child.key}
							ref={(node) => {
								//store tab to this.tabs
								this.tabs[index] = { tab: child, node };
							}}
							selected={selected}
							id={id}
							panelId={panelId}
							variant={variant}
						>
							{child.props.label}
						</Tab>
					);
				})}
			</TabsList>
		);
	}


	render() {
		const {
			className,
			id = this.generatedId,
			variant = this.getVariant,
		} = this.props;
		return (
			<React.Fragment>
				<div
					id={id}
					className={classNames(
						{
							'b-block-tabbar-wrap': variant === 'default',
							'b-block-tabbar-wrap-scoped': variant === 'scoped',
						},
						className
					)}
					onClick={this.handleClick}
					data-tabs
					ref={(node) => {
						this.tabsNode = node;
					}}
				>
					{this.renderTabsList(id)}
				</div>

				<div className="data-tabMenu-item section-message">
					{this.renderTabPanels(id)}
				</div>
				{/* eslint-enable jsx-a11y/no-static-element-interactions */}
			</React.Fragment>

		)
	}
}
Tabs.displayName = displayName;
Tabs.propTypes = propTypes;
Tabs.defaultProps = defaultProps;

export default Tabs