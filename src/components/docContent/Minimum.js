import React, { Component } from "react";
import Content from "./Content";

const validCode=
`M.min([1, 0, 5, 6]);   // 0
M.min([8, 7]);         // 7`;

const inValidCode=
`/*
* TypeError: Invalid argument received: <argument>
* "min()" only accept an array of real numbers!
*/
M.min(1, 2);
M.min([NaN, 5, Infinity]);
M.min(["foo", "bar"])`;


export default class Minimum extends Component {
  render() {
    return (
			<div className="tab-pane fade" id="minimum" role="tabpanel" aria-labelledby="minimum-tab">

				<Content
					title={"Minimum"}
					description={"The <b>M.min()</b> function returns the minimum of two or more numbers."}
					syntax={["M.min([value1, value2, ...])"]}
					arguments={["Array <Number>"]}
					return={["Number"]}
					validCode={validCode}
					inValidCode={inValidCode}
					info={"Implemented using JavaScript's built-in <b>Math.min()</b> function."}
				/>

			</div>
    );
  }
}

