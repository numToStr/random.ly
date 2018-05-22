import React, { Component } from "react";

/* 
* Usage ===========
*
* const __COMP__ = AsyncComponent(() => import('__PATH__'));
*/

const AsyncComponent = importComponent => {
	return class extends Component {
		state = {
			Component: null
		};

		componentDidMount() {
			importComponent().then(_component =>
				this.setState({ component: _component.default })
			);
		}

		render() {
			const { Component } = this.state;

			return Component ? <Component {...this.props} /> : null;
		}
	};
};

export default AsyncComponent;
