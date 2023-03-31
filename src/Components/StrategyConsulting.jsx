import React from 'react';

function StrategyConsulting() {
	return (

		<div className="strategy-consulting-page tabs-help">		


        {/* Ultimate User Guide Section Starts */}	
        
        <section className="vertical-tabs">
				<div class="hamburger-mobile">
					<img src="icons/hamburger.svg" alt="" />
				</div>

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
						Module 1
					</div>

					{/* -------- Module 1 -------- */}

					{/* -------- Module 2 -------- */}

					<div className="tab-pane fade" id="module2" role="tabpanel" aria-labelledby="module2-tab">
						Module 2
					</div>

					{/* -------- Module 2 -------- */}

					{/* -------- Module 3 -------- */}

					<div className="tab-pane fade" id="module3" role="tabpanel" aria-labelledby="module3-tab">
						Module 3
					</div>

					{/* -------- Module 3 -------- */}

					{/* -------- Module 4 -------- */}

					<div className="tab-pane fade" id="module4" role="tabpanel" aria-labelledby="module4-tab">
						Module 4
					</div>

					{/* -------- Module 4 -------- */}

				</div>
			</section>


        {/* Ultimate User Guide Section Ends */}


		</div>

	)
}


export default StrategyConsulting