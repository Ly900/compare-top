import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
// import '../../compare-top/compare-top.scss';
// import blankCard from './blank-card.svg';
// import JSONData from '../../../cats.json';

class CompareModal extends React.Component {

	render() {

		if (this.props.loading) {
			return <div>Loading...</div>;
		}

		return (

			<form onSubmit={(e) => this.props.onSubmit(e)}>
				{
					this.props.checkBoxItems.map((item, index) => {
						return (
							<div key={item.productId}>
								<input type="checkbox"
									id={item.productId}
									name={item.productName}
									value={item.productName}
									onChange={(e) => this.props.checkItem(e)} />
								<label >Add {item.productName} to Compare</label>
							</div>
						)
					})

				}
				{

					this.props.selectedItemsToRender.map((item, index) => {
						return <p key={index}>{item.productName}</p>
					})

				}
				<input type="submit" />
			</form>

		)
	}


}

export default CompareModal;