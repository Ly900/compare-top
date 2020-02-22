import React from 'react';
import '../../utils/utils.scss';
import '../compare-top/compare-top.scss';
import './blank-card/blank-card.scss';
import BlankCard from './blank-card/blank-card.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

function CompareTop() {

	return (
		<div className="compare-top__outer-wrapper">
			<div className="compare-top" role="region" aria-label="Credit Card Compare Tool">
				<div className="compare-top__inner-wrapper" role="list">

					{ /*
					<div className="compare-top__item" data-cardid="cashrewards" role="listitem">
						<div className="compare-top__item-wrapper">
							<figure className="compare-top__item-img-wrapper">
								<img alt="" className="compare-top__item-img" src="http://placekitten.com/496/312" />
							</figure>

							<a className="compare-top__item-link" href="cat1.html">
								<span className="compare-top__item-title">Cat No. 1</span>
							</a>
							<div className="compare-top__item-ctas">
								<a href="cat1/adopt.html" className="compare-top__item-link compare-top__item-apply-button btn btn_center">Adopt Now<span className="sr-only"> Cat No. 1</span></a>
								<a href="cat1.html" className="compare-top__item-link compare-top__item-details-link">Details<span className="sr-only">for Cat No. 1</span></a>
							</div>
							<button className="compare-top__item-close-button" aria-label="Remove the Cat No. 1 from the Compare Results page">
								<FontAwesomeIcon icon={faTimesCircle} />
							</button>
						</div>
					</div>

					<div className="compare-top__item" data-cardid="morerewards" role="listitem">
						<div className="compare-top__item-wrapper">
							<figure className="compare-top__item-img-wrapper">
								<img alt="" className="compare-top__item-img" src="http://placekitten.com/g/496/312" />
							</figure>

							<a className="compare-top__item-link" href="cat2.html">
								<span className="compare-top__item-title">Cat No. 2</span>
							</a>
							<div className="compare-top__item-ctas">
								<a href="cat2/adopt.html" className="compare-top__item-link compare-top__item-apply-button btn btn_center">Adopt Now<span className="sr-only"> Cat No. 2</span></a>
								<a href="cat2.html" className="compare-top__item-link compare-top__item-details-link">Details<span className="sr-only">for Cat No. 2</span></a>
							</div>
							<button className="compare-top__item-close-button" aria-label="Remove the Cat No. 2 from the Compare Results page">
								<FontAwesomeIcon icon={faTimesCircle} />
							</button>
						</div>
					</div>

					*/}

					<div className="compare-top__item" data-cardid="nrewards" role="listitem">
						<div className="compare-top__item-wrapper">
							<figure className="compare-top__item-img-wrapper">
								<img alt="" className="compare-top__item-img" src="http://placebear.com/496/312" />
							</figure>

							<a className="compare-top__item-link" href="bear.html">
								<span className="compare-top__item-title">Bear No. 1</span>
							</a>
							<div className="compare-top__item-ctas">
								<a href="bear1/adopt.html" className="compare-top__item-link compare-top__item-apply-button btn btn_center">Adopt Now<span className="sr-only"> Bear No. 1</span></a>
								<a href="bear1.html" className="compare-top__item-link compare-top__item-details-link">Details<span className="sr-only"> for the Bear</span></a>
							</div>
							<button className="compare-top__item-close-button" aria-label="Remove the Bear from the Compare Results page">
								<FontAwesomeIcon icon={faTimesCircle} />
							</button>
						</div>
					</div>

					<BlankCard />

					<BlankCard />

					{/* <BlankCard /> */}

					{/* <div className="compare-top__item compare-top__item_blank-card" role="listitem">
						<div className="compare-top__item-wrapper">
							<div className="compare-top__item-link">
								<img src="/clientlibs/assets/dam/credit-cards/blank-card.svg" className="compare-top__item-img item-img_blank-card" alt="" />
								<span className="compare-top__item-title item-title_text_empty">- Empty -</span>
							</div>
							<div className="compare-top__item-ctas">
								<a href="#compare-card-trigger" data-modal="true" className="compare-top__item-apply-button btn btn_center btn_tertiary" aria-label="Add a card" name="button">Add <span className="text_show-for-small-up show-for-medium-up">A </span> Card</a>
								<a href="#" className="compare-top__item-details-link item-details-link_display_hidden" aria-hidden="true">Card Details</a>
							</div>
						</div>
					</div> */}



				</div>
			</div>
		</div >
	);
}

export default CompareTop;
