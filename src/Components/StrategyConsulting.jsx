import React from 'react';
import Menu from './Menu';

function StrategyConsulting() {
	return (

		<div className="strategy-consulting-page tabs-help">


			{/* Ultimate User Guide Section Starts */}

			<section className="vertical-tabs">
				<Menu />

				<nav className="vertical-gd">
					<div className="nav flex-column nav-tabs mb-3" id="nav-tab" role="tablist" aria-orientation="vertical">
						<button className="nav-link tab-hdng active" id="module1-tab" data-bs-toggle="tab" data-bs-target="#module1" type="button" role="tab" aria-controls="module1" aria-selected="true">Strategy Overview</button>
						<button className="nav-link tab-hdng" id="module2-tab" data-bs-toggle="tab" data-bs-target="#module2" type="button" role="tab" aria-controls="module2" aria-selected="true">Strategic Analysis Pyramid</button>
						<button className="nav-link tab-hdng" id="module3-tab" data-bs-toggle="tab" data-bs-target="#module3" type="button" role="tab" aria-controls="module3" aria-selected="true">Strategy Formulation</button>
						<button className="nav-link tab-hdng" id="module4-tab" data-bs-toggle="tab" data-bs-target="#module4" type="button" role="tab" aria-controls="module4" aria-selected="true">Analytical Problem Solving Process</button>
					</div>

				</nav>

				<div className="tab-content" id="nav-tabContent">

					{/* -------- Module 1 -------- */}

					<div className="tab-pane fade active show" id="module1" role="tabpanel" aria-labelledby="module1-tab">
						<div className="tab-txts">
							<h2 className="hdng">Defining Strategy Overview</h2>
							<div className="tab-blocks">
								<div className="row">
									<div className="col-md-6">
										<p className="hdng-16">At the core of any management consulting project is a strategic issue that we must help the client address. Strategic issues can arise at all levels of the organization. However, their nature differs dependent on which level they arise.</p>
										<p className="hdng-16">In this presentation, we will discuss the different types and levels of strategy. To help structure this, we introduce the Strategic Analysis Pyramid.</p>
										<p className="hdng-16">This document also introduces the Analytical Problem Solving process, a 6-phase approach to solving a strategic issue. This is a common approach adopted by many top management consulting firms.</p>
										<p className="hdng-16">This problem solving process is referenced and used throughout the remaining training presentations.</p>
										<p className="hdng-18">Examples of Client Questions ➤</p>
									</div>
									<div className="col-md-6">
										<img src="images/strategy-img.jpg" alt="" />
									</div>
								</div>
							</div>

							<div className="tab-blocks">
								<h5 className="hdng-h5">Levels and Types of Strategy</h5>
								<p className="hdng-18">Corporate strategy:</p>
								<ul className="site-ul">
									<li>Which industries should we be in ?</li>
									<li>Which business units should we acquire/dispose ?</li>
									<li>Which countries should we be in ?</li>
								</ul>
							</div>

							<div className="tab-blocks">
								<p className="hdng-18">Business unit strategy:</p>
								<ul className="site-ul">
									<li>How should we position ourselves against our competitors ?</li>
								</ul>
							</div>

							<div className="tab-blocks">
								<p className="hdng-18">Marketing strategy:</p>
								<ul className="site-ul">
									<li>Which customer segments should we serve ?</li>
								</ul>
							</div>

							<div className="tab-blocks">
								<p className="hdng-18">Product strategy:</p>
								<ul className="site-ul">
									<li>Which products should we sell ? For how much ?</li>
								</ul>
							</div>

							<div className="tab-blocks">
								<p className="hdng-18">Channel strategy:</p>
								<ul className="site-ul">
									<li>Which channels should we use ?</li>
								</ul>
							</div>

						</div>
					</div>

					{/* -------- Module 1 -------- */}

					{/* -------- Module 2 -------- */}

					<div className="tab-pane fade" id="module2" role="tabpanel" aria-labelledby="module2-tab">
						<div className="tab-txts">
							<h2 className="hdng">Strategic Analysis Pyramid – Overview</h2>
							<div className="tab-blocks">
								<p className="hdng-16">The Strategic Analysis Pyramid captures all of the issues we help clients resolve, and provides a structured method of approaching them</p>
								<img src="images/pyramid-one.jpg" alt="" />
							</div>

							<div className="tab-blocks">
								<div className="row">
									<div className="col-md-6">
										<h5 className="hdng-h5">Strategic Analysis Pyramid – Top of the Pyramid</h5>
										<p className="hdng-16">The top half of the strategic pyramid looks at corporate level issues commonly faced by chief executives and boards</p>
										<p className="hdng-18">CORPORATE STRATEGY</p>
										<ul className="site-ul">
											<li>The vision defines a desirable future frame for the organisation</li>
											<li>Goals translate the vision into actionable priorities</li>
											<li>The corporate strategy defines how the goals will be achieved</li>
											<li>The corporate organisation must be optimally designed to deliver the corporate strategy</li>
										</ul>
									</div>
									<div className="col-md-6">
										<img src="images/pyramid-two.jpg" alt="" />
									</div>
								</div>
							</div>

							<div className="tab-blocks">
								<div className="row">
									<div className="col-md-6">
										<img src="images/pyramid-three.jpg" alt="" />
									</div>
									<div className="col-md-6">
										<h5 className="hdng-h5">Strategic Analysis Pyramid – Middle of the Pyramid</h5>
										<p className="hdng-16">The second level of the pyramid looks at business strategy, which is the key driver of the success of an organisation</p>
										<p className="hdng-18">BUSINESS STRATEGY</p>
										<ul className="site-ul">
											<li>Provides insight into the success factors for a particular business in a specific industry.</li>
											<li>Through internal and external analysis from a number of perspectives.</li>
											<li>Establish the priorities for the business, providing guidelines for resource allocation and decision making.</li>
										</ul>
										<p className="hdng-18">KEY QUESTIONS</p>
										<ul className="site-ul">
											<li>What is the relative performance of current players ?</li>
											<li>How can we create sustainable competitive advantage ?</li>
										</ul>
									</div>
								</div>
							</div>

							<div className="tab-blocks">
								<p className="hdng-18">Strategic Analysis Pyramid – Base of the Pyramid</p>
								<p className="hdng-16">Business strategy should drive functional (operational) strategy and organisation decisions</p>
								<img src="images/pyramid-four.jpg" alt="" />
							</div>
						</div>
					</div>
					{/* -------- Module 2 -------- */}

					{/* -------- Module 3 -------- */}

					<div className="tab-pane fade" id="module3" role="tabpanel" aria-labelledby="module3-tab">
						<div className="tab-txts">
							<h2 className="hdng">Strategy Formulation</h2>
							<div className="tab-blocks">
								<p className="hdng-16">The key to strategy formulation is understanding a client’s unique strategic position—and how that is changing over time</p>
								<p className="hdng-18">A company’s strategic position shapes its ability to create more value than its competitors:</p>
								<ul className="site-ul">
									<li>Customer value</li>
									<li>Economic value to reward other stakeholders (shareholders, employees, partners, etc.)</li>
								</ul>
							</div>

							<div className="tab-blocks">
								<p className="hdng-18">The drivers of strategic position in an industry or industry segment shift over time, but are a function of:</p>
								<ul className="site-ul">
									<li>Industry attractiveness, competitors’ strength.</li>
									<li>Ability to serve customer needs.</li>
									<li>Cost position.</li>
									<li>Capabilities and resources.</li>
								</ul>
							</div>

							<div className="tab-blocks">
								<p className="hdng-18">It is vital to understand the company’s unique strategic position and to choose what it will, and won’t do:</p>
								<ul className="site-ul">
									<li>How do we position the client as a player among other industry players.</li>
									<li>What are the specific trade-offs it must make vis-à-vis its unique capabilities and position in the industry ?</li>
								</ul>
							</div>

							<div className="tab-blocks">
								<h5 className="hdng-h5">Strategy: The Consultants’ Bottom Line</h5>
								<p className="hdng-16">How is strategy formulated ?</p>
								<img src="images/hypothesis.jpg" alt="" />
							</div>
						</div>
					</div>

					{/* -------- Module 3 -------- */}

					{/* -------- Module 4 -------- */}

					<div className="tab-pane fade" id="module4" role="tabpanel" aria-labelledby="module4-tab">
						<div className="tab-txts">
							<h2 className="hdng">Problem Solving Approaches</h2>
							<div className="tab-blocks">
								<p className="hdng-16">There are two basic approaches to problem solving</p>
								<h5 className="hdng-h5">The "there's a pony in here somewhere" approach</h5>
								<img src="images/potential.jpg" alt="" />
							</div>

							<div className="tab-blocks">
								<h5 className="hdng-h5">Management Consulting Problem Solving Process</h5>
								<p className="hdng-16">Hypotheses ensure that our analysis is focused and structured</p>
								<img src="images/skill-box.jpg" alt="" />
							</div>
							<div className="tab-blocks">
								<h5 className="hdng-h5">Hypothesis-driven Analysis</h5>
								<p className="hdng-18">What is hypothesis-driven analysis ?</p>
								<ul className="site-ul">
									<li>An approach for helping solve client problems and achieving insight into the business in an efficient and effective manner.</li>
									<li>When you look at data, insight is the answer to the question, “So What?”</li>
									<li><b>Much more than number crunching:</b></li>
									<li>Integrating logic, qualitative judgment, critical thinking.</li>
									<li>Seeing the bigger picture.</li>
									<li>Thinking conceptually and creatively.</li>
									<li><b>Not:</b></li>
									<li>Endless calculations.</li>
									<li>Letting the data/statistics rule.</li>
									<li>“Classic” scientific method or rigor.</li>
								</ul>
							</div>

							<div className="tab-blocks">
								<h5 className="hdng-h5">The rest of this strategy consulting training series is structured around this analytical problem solving process</h5>
								<p className="hdng-16">Management Consulting Problem Solving Process – Training Breakdown</p>
								<p className="hdng-18">Hypothesis-driven Analysis</p>
								<img src="images/strategy-development.jpg" alt="" />
							</div>
						</div>
					</div>

					{/* -------- Module 4 -------- */}

				</div>
			</section>


			{/* Ultimate User Guide Section Ends */}


		</div>

	)
}


export default StrategyConsulting