import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
// import '../../compare-top/compare-top.scss';
// import blankCard from './blank-card.svg';
import JSONData from '../../../cats.json';

class CompareModal extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			checkBoxItems: null
		}
	}

	// getOptionsFromJSON() {
	// 	return options = JSONData.map((option) => {
	// 		// console.log("option: ", option);
	// 	})
	// }

	componentDidMount() {
		console.log("component mounted");
		const options = JSONData.map((option) => {
			return option;
		})
		this.setState(() => ({
			loading: false,
			checkBoxItems: options
		}))
	}

	onSubmit(e) {
		e.preventDefault();
		console.log("form submitted");
		console.log(e.target);
	}

	render() {

		if (this.state.loading) {
			return <div>Loading...</div>;
		}

		return (

			<form onSubmit={this.onSubmit}>
				{
					this.state.checkBoxItems.map((item, index) => {
						return (
							<div key={item.productId}>
								<input type="checkbox" name={item.productName} value={item.productName} />
								<label >Add {item.productName} to Compare</label>
							</div>
						)
					})
				}
				<input type="submit" />
			</form>

		)
	}


}

export default CompareModal;