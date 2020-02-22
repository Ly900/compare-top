import React from 'react';
import '../../utils/utils.scss';
import '../compare-top/compare-top.scss';
import './blank-card/blank-card.scss';
import '../../utils/utils.js';
import SelectedCard from './selected-card/selected-card.js';
import BlankCard from './blank-card/blank-card.js';
import { sayHi, parseQueryString } from '../../utils/utils.js';

const CompareTop = () => {

	// const pids = getParameterByName('pid');
	const pids2 = parseQueryString('pid');

	return (
		<div className="compare-top__outer-wrapper">
			{/* {console.log('inside compare-top.js')} */}
			<div className="compare-top" role="region" aria-label="Credit Card Compare Tool">
				<div className="compare-top__inner-wrapper" role="list">

					<SelectedCard />

					<BlankCard />

					<BlankCard />

					{/* {sayHi()} */}

					{/* {console.log(pids)} */}

					{/* {console.log(pids2)} */}

				</div>
			</div>
		</div >
	);
}

export default CompareTop;
