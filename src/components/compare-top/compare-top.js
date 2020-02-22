import React from 'react';
import '../../utils/utils.scss';
import '../compare-top/compare-top.scss';
import './blank-card/blank-card.scss';
import '../../utils/utils.js';
import SelectedCard from './selected-card/selected-card.js';
import BlankCard from './blank-card/blank-card.js';
import { sayHi } from '../../utils/utils.js';

const CompareTop = () => {

	return (
		<div className="compare-top__outer-wrapper">
			{/* {console.log('inside compare-top.js')} */}
			<div className="compare-top" role="region" aria-label="Credit Card Compare Tool">
				<div className="compare-top__inner-wrapper" role="list">

					<SelectedCard />

					<BlankCard />

					<BlankCard />

					{sayHi()}

				</div>
			</div>
		</div >
	);
}

export default CompareTop;
