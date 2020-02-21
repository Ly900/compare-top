import React from 'react';
import '../compare-top/compare-top.scss';
import '../../utils/utils.scss';
import nRewardsImg from '../../images/nrewards.svg';
import cashRewardsImg from '../../images/cashrewards.svg';
import amexImg from '../../images/amex.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

function CompareTop() {
	return (
		<div className="compare-top__outer-wrapper">
			<div className="compare-top" role="region" aria-label="Credit Card Compare Tool">
				<div className="compare-top__inner-wrapper" role="list">

					<div className="compare-top__item" data-cardid="cashrewards" role="listitem">
						<div className="compare-top__item-wrapper">
							<figure className="compare-top__item-img-wrapper">
								<img alt="" className="compare-top__item-img" src={cashRewardsImg} />
							</figure>

							<a className="compare-top__item-link" href="/loans-cards/credit-cards/cash-rewards/">
								<span className="compare-top__item-title"><em>cash</em>Rewards</span>
							</a>
							<div className="compare-top__item-ctas">
								<a href="https://myaccounts.navyfederal.org/NFCU/accountservices/ifse?id=creditcardapplication&amp;ProductID=NFCC01" className="compare-top__item-link compare-top__item-apply-button btn btn_center">Apply Now <span className="sr-only">for the <em>cash</em>Rewards card.</span></a>
								<a href="/loans-cards/credit-cards/cash-rewards/" className="compare-top__item-link compare-top__item-details-link">Card Details <span className="sr-only">for the <em>cash</em>Rewards card.</span></a>
							</div>
							<button className="compare-top__item-close-button" aria-label="Remove the <em>cash</em>Rewards Credit Card from the Compare Results page">
								{/* <i className="icon-close-solid" aria-hidden="true"></i> */}
								<FontAwesomeIcon icon={faTimesCircle} />
							</button>
						</div>
					</div>

					<div className="compare-top__item" data-cardid="morerewards" role="listitem">
						<div className="compare-top__item-wrapper">
							<figure className="compare-top__item-img-wrapper">
								<img alt="" className="compare-top__item-img" src={amexImg} />
							</figure>

							<a className="compare-top__item-link" href="/loans-cards/credit-cards/more-rewards/">
								<span className="compare-top__item-title">More Rewards</span>
							</a>
							<div className="compare-top__item-ctas">
								<a href="https://myaccounts.navyfederal.org/NFCU/accountservices/ifse?id=creditcardapplication&amp;ProductID=NFCC07" className="compare-top__item-link compare-top__item-apply-button btn btn_center">Apply Now <span className="sr-only">for the More Rewards card.</span></a>
								<a href="/loans-cards/credit-cards/more-rewards/" className="compare-top__item-link compare-top__item-details-link">Card Details <span className="sr-only">for the More Rewards card.</span></a>
							</div>
							<button className="compare-top__item-close-button" aria-label="Remove the <em>cash</em>Rewards Credit Card from the Compare Results page">
								{/* <i className="icon-close-solid" aria-hidden="true"></i> */}
								<FontAwesomeIcon icon={faTimesCircle} />
							</button>
						</div>
					</div>

					<div className="compare-top__item" data-cardid="nrewards" role="listitem">
						<div className="compare-top__item-wrapper">
							<figure className="compare-top__item-img-wrapper">
								<img alt="" className="compare-top__item-img" src={nRewardsImg} />
							</figure>

							<a className="compare-top__item-link" href="/loans-cards/credit-cards/nrewards-secured/">
								<span className="compare-top__item-title"><em>n</em>Rewards</span>
							</a>
							<div className="compare-top__item-ctas">
								<a href="#nrewards-modal" className="compare-top__item-link compare-top__item-apply-button btn btn_center original-nrewards-link" data-href="https://myaccounts.navyfederal.org/NFCU/accountservices/ifse?id=creditcardapplication&amp;ProductID=NFCC03" data-modal="true">Apply Now <span className="sr-only">for the <em>n</em>Rewards® Secured card.</span></a>
								<a href="/loans-cards/credit-cards/nrewards-secured/" className="compare-top__item-link compare-top__item-details-link">Card Details <span className="sr-only">for the <em>n</em>Rewards® Secured card.</span></a>
							</div>
							<button className="compare-top__item-close-button" aria-label="Remove the <em>cash</em>Rewards Credit Card from the Compare Results page">
								{/* <i className="icon-close-solid" aria-hidden="true"></i> */}
								<FontAwesomeIcon icon={faTimesCircle} />
							</button>
						</div>
					</div>

					{/* Empty blank card to test later. }
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
