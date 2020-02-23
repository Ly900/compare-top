import React from 'react';
import '../../utils/utils.scss';
// import '../compare-top/compare-top.scss';
import '../../utils/utils.js';
import CompareTop from './compare-top/compare-top.js';
import CompareModal from './compare-modal/compare-modal.js';
// import CompareItem from './compare-item/compare-item.js';
// import { getPIDValues } from '../../utils/utils.js';
import JSONData from '../../cats.json';

class CompareResultsPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			checkBoxItems: null
		}
	}

	getOptionsFromJSON() {
		const options = JSONData.map((option) => {
			return option;
		})
		return options;
	}

	componentDidMount() {
		console.log("component mounted");
		const options = this.getOptionsFromJSON();
		this.setState(() => ({
			loading: false,
			checkBoxItems: options
		}))
	}

	render() {

		return (
			<div>
				<CompareTop />
				<p className="test">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
					sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  			</p>
				<p className="test">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
					sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  			</p>
				<CompareModal loading={this.state.loading} checkBoxItems={this.state.checkBoxItems} />
			</div>
		);
	}

}

export default CompareResultsPage;