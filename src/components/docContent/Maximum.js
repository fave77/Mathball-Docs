import React, { Component } from "react";
import Content from "./Content";

const validCode=
`M.max([1, 0, -5, 6]);   // 6
M.max([8, 7]);         // 8`;

const inValidCode=
`/*
* TypeError: Invalid argument received: <argument>
* "max()" only accept an array of real numbers!
*/
M.max(1, 2);
M.max([NaN, 5, Infinity]);
M.max(["foo", "bar"])`;


export default class Maximum extends Component {
  render() {
    return (
			<div className="tab-pane fade" id="maximum" role="tabpanel" aria-labelledby="maximum-tab">

				<Content
					title={"Maximum"}
					description={"The <b>M.max()</b> function returns the maximum of two or more numbers."}
					syntax={["M.max([value1, value2, ...])"]}
					arguments={["Array <Number>"]}
					return={["Number"]}
					validCode={validCode}
					inValidCode={inValidCode}
					info={"Implemented using JavaScripts built-in <b>Math.max()</b> function."}
				/>

			</div>
    );
  }
}

