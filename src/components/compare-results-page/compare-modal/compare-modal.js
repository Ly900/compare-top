import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
// import '../../compare-top/compare-top.scss';
// import blankCard from './blank-card.svg';
import JSONData from '../../../cats.json';

class CompareModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			checkBoxItems: null,
			selectedItemIds: [],
			selectedItemsToRender: [],
			pids: ["cat1", "bear1", "cat2"]	// Replace with dynamic code to parse and get pids from URL.
		}
	}

	onSubmit(e) {
		e.preventDefault();
		// TO DO: Insert code to redirect to URL with pids in query string.
	}

	checkItem(e) {
		// console.log("target: ", e.target);// console.log("item checked");
		// console.log("is target checked: ", e.target.checked);
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
		this.setState((e) => ({
			selectedItemIds: updatedIdsList,
		}))
	}

	precheckCheckboxes() {
		// console.log("pids: ", this.state.pids);
		this.state.pids.forEach((pid) => {
			document.getElementById(pid).checked = true;
		});
		this.setState({
			selectedItemIds: this.state.pids
		}, () => {
			console.log("selectedItemIds: ", this.state.selectedItemIds);
		}
		);
	}

	getOptionsFromJSON() {
		const options = JSONData.map((option) => {
			return option;
		})
		return options;
	}

	componentDidMount() {
		const options = this.getOptionsFromJSON();
		this.setState(
			{
				loading: false,
				checkBoxItems: options
			}, () => {
				this.precheckCheckboxes();
			}
		);
	}

	render() {

		if (this.state.loading) {
			return <div>Loading...</div>;
		}

		return (
			<div className="compare-modal content-modal" id="compare-card-trigger" role="dialog" aria-labelledby="headlineID" aria-describedby="contentID" tabIndex="-1" aria-hidden="false">
				<section className="compare-modal__wrapper" role="document">
					<header className="compare-modal__header" role="presentation">
						<h3 id="headlineID" className="compare-modal__title">Choose animals to compare</h3>
						<button className="compare-modal__close-button" aria-label="Close Choose cards to compare Dialog">
							<FontAwesomeIcon icon={faTimesCircle} />
						</button>
					</header>
					<form onSubmit={(e) => this.onSubmit(e)} className="compare-modal__form">
						<p id="contentID" className="compare-modal__form-header">Choose up to 3 animals</p>
						<div className="compare-modal__form-body">
							{
								this.state.checkBoxItems.map((item, index) => {
									return (
										<div className={`compare-modal__form-item compare-modal__form-item_${item.productId}`} key={item.productId}>
											<div className="compare-modal__form-info">
												<figure className="compare-modal__figure">
													<img alt="" className="compare-modal__img card-img" src={item.cardArt} />
												</figure>
												<div className="compare-modal__text-container">
													<h4 className="compare-modal__text-subheading">{item.productName}</h4>
													<p className="compare-modal__text-description">{item.description}</p>
												</div>
											</div>
											<div className="compare-modal__checkbox-container">
												<input type="checkbox" className="compare-modal__checkbox-input"
													id={item.productId}
													name={item.productId}
													value={item.productId}
													// checked={this.state.checked}
													onChange={(e) => this.checkItem(e)} />
												<label className="compare-modal__checkbox-label" tabIndex="-1" htmlFor={item.productId}>Add <span className="sr-only">{item.productName}</span> to Compare</label>
											</div>
										</div>
									)
								})
							}
						</div>
						{

							// this.props.selectedItemsToRender.map((item, index) => {
							// 	return <p key={index}>{item.productName}</p>
							// })

						}
						<div className="compare-modal__update-btn-wrapper">
							<button type="submit" className="compare-modal__update-btn btn btn_tertiary btn_resp">Update</button>
						</div>
					</form>
				</section>
			</div>
		)
	}


}

export default CompareModal;