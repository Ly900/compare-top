import React from 'react';
import '../../../utils/utils.scss';
import '../compare-top/compare-top.scss';
import CompareItem from '../compare-item/compare-item.js';
// import { getPIDValues } from '../../../utils/utils.js';
import JSONData from '../../../cats.json';

class CompareTop extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			itemsToRender: [null, null, null]
		}
	}

	// Get objects from JSON file that match query string pids. Fill empty elements with "null" values to get an array of 3.
	getMatches(pids) {
		let itemsToShow = pids.map(pid => {
			return JSONData.filter(item => {
				return item.productId === pid;
			})
		})
		itemsToShow = itemsToShow.flat().slice(0, 3);
		while (itemsToShow.length < 3) {
			itemsToShow.push({});
		}
		return itemsToShow;
	}

	componentDidMount() {
		this.setState(() => ({
			loading: false
		}));
	}

	render() {

		if (this.state.loading) {
			return <div>Loading...</div>;
		}

		return (
			<div className="compare-top__outer-wrapper">
				<div className="compare-top" role="region" aria-label="Credit Card Compare Tool">
					<div className="compare-top__inner-wrapper" role="list">

						{
							this.props.selectedItemsToRender.map((item, index) => {
								return <CompareItem key={index} item={item} selectedItemsToRender={this.props.selectedItemsToRender} test="empty card component" />
							})
						}

					</div>
				</div>

			</div >
		);
	}

}

export default CompareTop;
