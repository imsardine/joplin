const React = require('react');
const { connect } = require('react-redux');
const { themeStyle } = require('lib/theme');
const ToolbarButton = require('./ToolbarButton/ToolbarButton.js').default;
const ToolbarSpace = require('./ToolbarSpace.min.js');
const ToggleEditorsButton = require('./ToggleEditorsButton/ToggleEditorsButton.js').default;

class ToolbarComponent extends React.Component {
	render() {
		const theme = themeStyle(this.props.themeId);

		const style = Object.assign({
			display: 'flex',
			flexDirection: 'row',
			boxSizing: 'border-box',
			padding: theme.mainPadding,
			backgroundColor: theme.backgroundColor3,
		}, this.props.style);

		const groupStyle = {
			display: 'flex',
			flexDirection: 'row',
			boxSizing: 'border-box',
		};

		const leftItemComps = [];
		const centerItemComps = [];
		const rightItemComps = [];

		if (this.props.items) {
			for (let i = 0; i < this.props.items.length; i++) {
				const o = this.props.items[i];
				let key = o.iconName ? o.iconName : '';
				key += o.title ? o.title : '';
				const itemType = !('type' in o) ? 'button' : o.type;

				if (!key) key = `${o.type}_${i}`;

				const props = Object.assign(
					{
						key: key,
						themeId: this.props.themeId,
					},
					o
				);

				if (this.props.disabled) props.disabled = true;

				if (o.name === 'toggleEditors') {
					rightItemComps.push(<ToggleEditorsButton
						key={o.name}
						value={'markdown'}
						themeId={this.props.themeId}
						toolbarButtonInfo={o}
					/>);
				} else if (itemType === 'button') {
					const target = ['historyForward', 'historyBackward', 'startExternalEditing'].includes(o.name) ? leftItemComps : centerItemComps;
					target.push(<ToolbarButton {...props} />);
				} else if (itemType === 'separator') {
					centerItemComps.push(<ToolbarSpace {...props} />);
				}
			}
		}

		return (
			<div className="editor-toolbar" style={style}>
				<div style={groupStyle}>
					{leftItemComps}
				</div>
				<div style={groupStyle}>
					{centerItemComps}
				</div>
				<div style={Object.assign({}, groupStyle, { flex: 1, justifyContent: 'flex-end' })}>
					{rightItemComps}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { themeId: state.settings.theme };
};

const Toolbar = connect(mapStateToProps)(ToolbarComponent);

module.exports = Toolbar;
