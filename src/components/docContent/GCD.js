import React, { Component } from "react";
import Content from './Content';

const validCode=
`M.gcd([12, 18, 24]);   // 6
M.gcd([8, 7]);         // 1`

const inValidCode=
`/*
* TypeError: Invalid argument received: <argument>
* 'gcd()' only accept an array of positive real numbers!
*/
M.gcd(-20, 24);
M.gcd([NaN, 5, Infinity]);
M.gcd(['foo', 'bar']);`


export default class GCD extends Component {
  render() {
    return (
			<div className="tab-pane fade" id="GCD" role="tabpanel" aria-labelledby="GCD-tab">

				<Content
					title={'GCD'}
					description={`The <b>M.gcd()</b> function returns the gcd of two or more numbers.`}
					syntax={['M.gcd([value1, value2, ...])']}
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

