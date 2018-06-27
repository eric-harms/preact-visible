import { h } from 'preact';

const Visible = (props) => (
	<span>
		{props.isVisible ? props.children : null}
	</span>
);

export default Visible;