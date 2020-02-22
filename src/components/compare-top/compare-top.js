import React from 'react';
import '../../utils/utils.scss';
import '../compare-top/compare-top.scss';
import './blank-card/blank-card.scss';
import SelectedCard from './selected-card/selected-card.js';
import BlankCard from './blank-card/blank-card.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

function CompareTop() {

	return (
		<div className="compare-top__outer-wrapper">
			<div className="compare-top" role="region" aria-label="Credit Card Compare Tool">
				<div className="compare-top__inner-wrapper" role="list">

					<SelectedCard />

					<BlankCard />

					<BlankCard />

				</div>
			</div>
		</div >
	);
}

export default CompareTop;
