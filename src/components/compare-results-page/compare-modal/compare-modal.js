import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
// import '../../compare-top/compare-top.scss';
// import blankCard from './blank-card.svg';
// import JSONData from '../../../cats.json';

class CompareModal extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			checkBoxItems: null
		}
	}

	onSubmit(e) {
		e.preventDefault();
		console.log("form submitted");
		console.log(e.target);
	}

	render() {

		if (this.props.loading) {
			return <div>Loading...</div>;
		}

		return (

			<form onSubmit={this.onSubmit}>
				{
					this.props.checkBoxItems.map((item, index) => {
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