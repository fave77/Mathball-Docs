import React, { Component } from "react";
import Content from './Content';

const validCode=
`M.sort([2, 30, 5, 15,],true);          // [2,5,15,30]  true=ascending order
M.sort([8, -7,-5,40,9],false);         // [40,9,8,-5,-7] false=descending order
M.sort([8, -7,-5,40,9]);               // [-7,-5,8,9,40] default=ascending order`

const inValidCode=
`/*
* TypeError: Invalid argument received: <argument>
* 'lcm()' only accept an array of positive real numbers!
*/
M.sort([true,8],true);
M.sort([NaN, 5, Infinity],true);
M.sort(['foo', 'bar'],false);`


export default class Sort extends Component {
  render() {
    return (
			<div className="tab-pane fade" id="sort" role="tabpanel" aria-labelledby="sort-tab">

				<Content
					title={'Sort'}
					description={`The <b>M.sort()</b> function returns a sorted array of integers in either ascending or descending order.`}
					syntax={['M.sort(value1,value2)']}
					arguments={['Array , Boolean']}
					return={['Array']}
					validCode={validCode}
					inValidCode={inValidCode}
					info={`Implemented using JavaScript's built-in <b>sort</b> function.`}
				/>

			</div>
    );
  }
}

