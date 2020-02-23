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
			selectedItemIds: []
		}
	}

	checkItem(e) {
		console.log("item checked");
		console.log(e.target);
		let updatedIdsList;
		// If the checkbox was not already selected, add it to the array.
		if (this.state.selectedItemIds.indexOf(e.target.id) === -1) {
			updatedIdsList = this.state.selectedItemIds.concat(e.target.id);
			// If the checkbox was already selected, remove it from the array.
		} else {
			updatedIdsList = this.state.selectedItemIds.filter((item) => {
				return item !== e.target.id;
			})
		}
		this.setState(() => ({
			selectedItemIds: updatedIdsList
		}))
	}

	onSubmit(e) {
		e.preventDefault();
		console.log("form submitted");
		console.log(e.target);
		// console.log("selected item ids: ", this.state.selectedItemIds);

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
								<input type="checkbox"
									id={item.productId}
									name={item.productName}
									value={item.productName}
									onChange={(e) => this.checkItem(e)} />
								<label >Add {item.productName} to Compare</label>
							</div>
						)
					})

				}
				{

					this.state.selectedItemIds.map((item) => {
						return <p key={item}>{item}</p>
					})

				}
				<input type="submit" />
			</form>

		)
	}


}

export default CompareModal;