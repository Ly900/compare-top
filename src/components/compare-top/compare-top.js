import React from 'react';
import '../compare-top/compare-top.scss';
import '../../utils/utils.scss';

function CompareTop() {
	return (
		<div className="compare-top__outer-wrapper">
			<div className="compare-top" role="region" aria-label="Credit Card Compare Tool">
				<div className="compare-top__wrapper" role="list">

					<div className="compare-top__item" data-cardid="cashrewards" role="listitem">
						<div className="item__wrapper">
							<figure>
								<img alt="" className="item__image" src="/clientlibs/assets/dam/credit-cards/cashrewards/cashrewards.svg" />
							</figure>

							<a className="item__link" href="/loans-cards/credit-cards/cash-rewards/">
								<span className="item__title"><em>cash</em>Rewards</span>
							</a>
							<div className="item__ctas">
								<a href="https://myaccounts.navyfederal.org/NFCU/accountservices/ifse?id=creditcardapplication&amp;ProductID=NFCC01" className="item__button btn btn_center">Apply Now <span className="sr-only">for the <em>cash</em>Rewards card.</span></a>
								<a href="/loans-cards/credit-cards/cash-rewards/" className="item__details-link">Card Details <span className="sr-only">for the <em>cash</em>Rewards card.</span></a>
							</div>
							<button className="item__close-button" aria-label="Remove the <em>cash</em>Rewards Credit Card from the Compare Results page"><i className="icon-close-solid" aria-hidden="true"></i></button>
						</div>
					</div>

					<div className="compare-top__item" data-cardid="morerewards" role="listitem">
						<div className="item__wrapper">
							<figure>
								<img alt="" className="item__image" src="/clientlibs/assets/dam/credit-cards/morerewards/amex-no-name.svg" />
							</figure>

							<a className="item__link" href="/loans-cards/credit-cards/more-rewards/">
								<span className="item__title">More Rewards</span>
							</a>
							<div className="item__ctas">
								<a href="https://myaccounts.navyfederal.org/NFCU/accountservices/ifse?id=creditcardapplication&amp;ProductID=NFCC07" className="item__button btn btn_center">Apply Now <span className="sr-only">for the More Rewards card.</span></a>
								<a href="/loans-cards/credit-cards/more-rewards/" className="item__details-link">Card Details <span className="sr-only">for the More Rewards card.</span></a>
							</div>
							<button className="item__close-button" aria-label="Remove the More Rewards Amex Credit Card from the Compare Results page"><i className="icon-close-solid" aria-hidden="true"></i></button>
						</div>
					</div>

					<div className="compare-top__item" data-cardid="nrewards" role="listitem">
						<div className="item__wrapper">
							<figure>
								<img alt="" className="item__image" src="/clientlibs/assets/dam/credit-cards/nrewards/nrewards.svg" />
							</figure>

							<a className="item__link" href="/loans-cards/credit-cards/nrewards-secured/">
								<span className="item__title"><em>n</em>Rewards® Secured</span>
							</a>
							<div className="item__ctas">
								<a href="#nrewards-modal" className="item__button btn btn_center original-nrewards-link" data-href="https://myaccounts.navyfederal.org/NFCU/accountservices/ifse?id=creditcardapplication&amp;ProductID=NFCC03" data-modal="true">Apply Now <span className="sr-only">for the <em>n</em>Rewards® Secured card.</span></a>
								<a href="/loans-cards/credit-cards/nrewards-secured/" className="item__details-link">Card Details <span className="sr-only">for the <em>n</em>Rewards® Secured card.</span></a>
							</div>
							<button className="item__close-button" aria-label="Remove the nRewards® Secured card from the Compare Results page"><i className="icon-close-solid" aria-hidden="true"></i></button>
						</div>
					</div>

					{/* Empty blank card to test later. }
					{/* <div className="compare-top__item compare-top__item_blank-card" role="listitem">
						<div className="item__wrapper">
							<div className="item__link">
								<img src="/clientlibs/assets/dam/credit-cards/blank-card.svg" className="item__image item__image_blank-card" alt="" />
								<span className="item__title item__title_text_empty">- Empty -</span>
							</div>
							<div className="item__ctas">
								<a href="#compare-card-trigger" data-modal="true" className="item__button btn btn_center btn_tertiary" aria-label="Add a card" name="button">Add <span className="text_show-for-small-up show-for-medium-up">A </span> Card</a>
								<a href="#" className="item__details-link item__details-link_display_hidden" aria-hidden="true">Card Details</a>
							</div>
						</div>
					</div> */}


				</div>
			</div>
		</div>
	);
}

export default CompareTop;
