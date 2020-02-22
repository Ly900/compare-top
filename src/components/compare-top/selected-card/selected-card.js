import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import '../../compare-top/compare-top.scss';

function SelectedCard() {
	return (

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

	)

}

export default SelectedCard;