import React, { Component } from "react";
import Content from './Content';

const validCode=
`M.sum([1, 0, 5, 6]);   // 12
M.sum([8, 7]);         // 15`

const inValidCode=
`/*
* TypeError: Invalid argument received: <argument>
* 'sum()' only accept an array of real numbers!
*/
M.sum(1, 2);
M.sum([NaN, 5, Infinity]);
M.sum(['foo', 'bar']);`


export default class Sum extends Component {
  render() {
    return (
			<div className="tab-pane fade" id="sum" role="tabpanel" aria-labelledby="sum-tab">

				<Content
					title={'Sum'}
					description={`The <b>M.sum()</b> function returns the sum of two or more numbers.`}
					syntax={['M.sum([value1, value2, ...])']}
					arguments={['Array <Number>']}
					return={['Number']}
					validCode={validCode}
					inValidCode={inValidCode}
					info={`Implemented using JavaScript's built-in <b>reduce</b> function.`}
				/>

			</div>
    );
  }
}

