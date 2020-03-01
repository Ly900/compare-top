import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import '../compare-top/compare-top.scss';
import blankCard from './blank-card.svg';
// import { getPIDValues } from '../../../utils/utils.js';
import '../compare-modal/compare-modal.scss';

const CompareItem = (props) => {
	// console.log("props.item: ", props.item);
	console.log("props.item: ", props.item);

	// console.log("props.test: ", props.test);

	// const compareItem = props.item;
	// const itemIsEmpty = Object.keys(compareItem).length === 0 && compareItem.constructor === Object;
	const itemIsEmpty = Object.keys(props.item).length === 0 && props.item.constructor === Object;

	const compareItem = props.item;

	return (

		<div className="compare-top__item" data-cardid={compareItem.productName} role="listitem" >
			< div className="compare-top__item-wrapper" >
				<figure className="compare-top__item-img-wrapper">
					<img alt="" className="compare-top__item-img" src={itemIsEmpty ? blankCard : props.item.cardArt} />
				</figure>

				<a className="compare-top__item-link" href={`${!!itemIsEmpty ? compareItem.productPageURL : '#'}`} tab-index="0">
					<span className={`compare-top__item-title" ${itemIsEmpty && 'compare-top__item-title_empty-text'}`}>{!itemIsEmpty ? compareItem.productName : '--Empty--'}</span>
				</a>

				<div className="compare-top__item-ctas">

					{ /* Use an anchor if there is an Apply Now button */
						!itemIsEmpty && <a href={compareItem.applicationURL} className="compare-top__item-link compare-top__item-apply-button btn btn_center">Adopt Now<span className="sr-only"> a {compareItem.productName}</span></a>

					}

					{ /* Use a button if there is no Apply Now button */
						itemIsEmpty &&

						<button className="compare-top__item-link compare-top__item-apply-button btn btn_center btn_tertiary" >Add Animal</button>

					}

					{
						!itemIsEmpty && <a href={compareItem.productPageURL} className="compare-top__item-link compare-top__item-details-link">Details<span className="sr-only"> for the {compareItem.productName}</span></a>

					}


				</div>
				{
					!itemIsEmpty && <button className={`compare-top__item-close-button ${itemIsEmpty && 'hidden'}`} aria-label={`Remove the ${compareItem.productName} from the Compare Results page`}>
						<FontAwesomeIcon icon={faTimesCircle} />
					</button>
				}

			</div >
		</div >

	)

}

export default CompareItem;