import React, { Component } from "react";
import Absolute from './docContent/Absolute';
import Addition from './docContent/Addition';
import Average from './docContent/Average';
import BinomialCoeff from './docContent/BinomialCoeff';
import ComplexNumber from './docContent/ComplexNumber';
import Convert from './docContent/Convert';
import Count from './docContent/Count';
import Divide from './docContent/Divide';
import EulersTotient from './docContent/EulersTotient';
import FindnthNumber from './docContent/FindnthNumber';
import GCD from './docContent/GCD';
import Graph from './docContent/Graph';
import LCM from './docContent/LCM';
import Length from './docContent/Length';
import Matrix from './docContent/Matrix';
import Maximum from './docContent/Maximum';
import Median from './docContent/Median';
import Minimum from './docContent/Minimum';
import ModularInverse from './docContent/ModularInverse';
import ModularExponent from './docContent/ModularExponent';
import Multiply from './docContent/Multiply';
import NumberChecker from './docContent/NumberChecker';
import Performance from './docContent/Performance';
import Permute from './docContent/Permute';
import Pipe from './docContent/Pipe';
import PriorityQueue from './docContent/PriorityQueue';
import RangeOfNumber from './docContent/RangeOfNumber';
import SetBits from './docContent/SetBits';
import Sort from './docContent/Sort';
import Stack from './docContent/Stack';
import Subtract from './docContent/Subtract';
import Sum from './docContent/Sum';
import "../stylesheets/docs.css";

class Docs extends Component {
  render() {
		const options = ['addition', 'average', 'binomial-coeff', 'complex-number', 'convert', 'count', 'divide',
			'eulers-totient', 'find-nth-number', 'GCD', 'graph', 'LCM', 'length', 'matrix', 'maximum', 'median', 'minimum',
			'modular-inverse', 'modular-exponent', 'multiply', 'number-checker', 'performance', 'permute', 'pipe', 'priority-queue',
			'range-of-number', 'set-bits', 'sort', 'stack', 'subtract', 'sum']

    return (
      <div id="docs">
				<div className="sidebar">
					<div className="nav flex-column nav-pills" id="tab" role="tablist" aria-orientation="vertical">
						<a className="nav-link active" id="absolute-tab" data-toggle="pill" href="#absolute" role="tab" aria-controls="about" aria-selected="true">Absolute</a>
						{options.map((option, index) => (
							<a
								key={index}
								className="nav-link"
								id={`${option}-tab`}
								data-toggle="pill"
								href={`#${option}`}
								role="tab"
								aria-controls={option}
								aria-selected="false">
									{option}
							</a>
						))}
					</div>
				</div>
				<div className="main-section">
					<div className="tab-content" id="tabContent">
						<Absolute />
						<Addition />
						<Average />
						<BinomialCoeff />
						<ComplexNumber />
						<Convert />
						<Count />
						<Divide />
						<EulersTotient />
						<FindnthNumber />
						<GCD />
						<Graph />
						<LCM />
						<Length />
						<Matrix />
						<Maximum />
						<Median />
						<Minimum />
						<ModularInverse />
						<ModularExponent />
						<Multiply />
						<NumberChecker />
						<Performance />
						<Permute />
						<Pipe />
						<PriorityQueue />
						<RangeOfNumber />
						<SetBits />
						<Sort />
						<Stack />
						<Subtract />
						<Sum />
					</div>
				</div>
			</div>
    );
  }
}

export default Docs;
