import React from 'react';
import '../../utils/utils.scss';
import '../compare-top/compare-top.scss';
import './blank-card/blank-card.scss';
import '../../utils/utils.js';
import SelectedCard from './selected-card/selected-card.js';
import BlankCard from './blank-card/blank-card.js';
import { getPIDValues } from '../../utils/utils.js';
import JSONData from '../../cats.json';

class CompareTop extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			items: null
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
		const pids = getPIDValues();
		let matches;
		// console.log("pids: ", pids);
		// console.log("JSONData: ", JSONData);
		matches = this.getMatches(pids);
		console.log("matches: ", matches);
		this.setState(() => ({
			loading: false,
			items: matches
		}));
		// console.log("matches: ", matches);
		// console.log("this.state.items: ", this.state.items);
	}

	render() {

		if (this.state.loading) {
			return <div>Loading...</div>;
		}

		return (
			<div className="compare-top__outer-wrapper">
				{/* {console.log('inside compare-top.js')} */}
				<div className="compare-top" role="region" aria-label="Credit Card Compare Tool">
					<div className="compare-top__inner-wrapper" role="list">

						<SelectedCard />

						<BlankCard />

						<BlankCard />

					</div>
				</div>
				{
					this.state.items.map((item, index) => {
						return <h1 key={index}>{item.productId}</h1>
					})
				}
				{/* {this.state.items} */}
			</div >
		);
	}

}

export default CompareTop;
