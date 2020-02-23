import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import '../../compare-top/compare-top.scss';

const CompareItem = (props) => {

	const compareItem = props.match;
	// console.log(compareItem);
	const itemIsEmpty = Object.keys(compareItem).length === 0 && compareItem.constructor === Object;
	console.log(itemIsEmpty);


	return (

		<div className={`compare-top__item" ${!itemIsEmpty ? `data-cardid="${compareItem.productName}` : ''}`} role="listitem" >
			< div className="compare-top__item-wrapper" >
				<figure className="compare-top__item-img-wrapper">
					<img alt="" className="compare-top__item-img" src={compareItem.cardArt} />
				</figure>

				<a className="compare-top__item-link" href="bear.html">
					<span className="compare-top__item-title">{compareItem.productName}</span>
				</a>
				<div className="compare-top__item-ctas">
					<a href={compareItem.applicationURL} className="compare-top__item-link compare-top__item-apply-button btn btn_center">Adopt Now<span className="sr-only"> {compareItem.productName}</span></a>
					<a href={compareItem.productPageURL} className="compare-top__item-link compare-top__item-details-link">Details<span className="sr-only"> for the {compareItem.productName}</span></a>
				</div>
				<button className="compare-top__item-close-button" aria-label={`Remove the ${compareItem.productName} from the Compare Results page`}>
					<FontAwesomeIcon icon={faTimesCircle} />
				</button>
			</div >
		</div >

	)

}

export default CompareItem;