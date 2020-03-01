import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
// import '../../compare-top/compare-top.scss';
// import blankCard from './blank-card.svg';
// import JSONData from '../../../cats.json';

class CompareModal extends React.Component {

	render() {

		if (this.props.loading) {
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
					<form onSubmit={(e) => this.props.onSubmit(e)} className="compare-modal__form">
						<p id="contentID" className="compare-modal__form-header">Choose up to 3 animals</p>
						<div className="compare-modal__form-body">
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
						</div>
						{

							this.props.selectedItemsToRender.map((item, index) => {
								return <p key={index}>{item.productName}</p>
							})

						}
						<input type="submit" />
					</form>
				</section>
			</div>
		)
	}


}

export default CompareModal;