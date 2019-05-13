import React, { Component } from "react";
import Content from "./Content";

const validCode=
`M.median([1, 3, 4, 2, 6, 5, 8, 7]);   // 4.5
M.median([4, 4, 4, 4]);         // 4`;

const inValidCode=
`/*
* TypeError: Invalid argument received: <argument>
* "median()" only accept an array of real numbers!
*/
M.median(1, 2);
M.median([NaN, 5, Infinity]);
M.median(["foo", "bar"]);`;


export default class Median extends Component {
  render() {
    return (
			<div className="tab-pane fade" id="median" role="tabpanel" aria-labelledby="median-tab">

				<Content
					title={"Median"}
					description={"The <b>M.median()</b> function returns the median of the numbers provided."}
					syntax={["M.median([value1, value2, ...])"]}
					arguments={["Array <Number>"]}
					return={["Number"]}
					validCode={validCode}
					inValidCode={inValidCode}
					info={"Implemented using JavaScript's built-in <b>Math.sort()</b> <b>Math.floor()</b> function."}
				/>

			</div>
    );
  }
}

