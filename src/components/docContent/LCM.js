import React, { Component } from "react";
import Content from "./Content";

const validCode=
`M.lcm([2, 3, 5, 15]);   // 30
M.lcm([8, 7]);         // 56`;

const inValidCode=
`/*
* TypeError: Invalid argument received: <argument>
* "lcm()" only accept an array of positive real numbers!
*/
M.lcm([-40,8]);
M.lcm([NaN, 5, Infinity]);
M.lcm(["foo", "bar"]);`;


export default class LCM extends Component {
  render() {
    return (
			<div className="tab-pane fade" id="LCM" role="tabpanel" aria-labelledby="LCM-tab">

				<Content
					title={"LCM"}
					description={"The <b>M.lcm()</b> function returns the lcm of two or more numbers."}
					syntax={["M.lcm([value1, value2, ...])"]}
					arguments={["Array <Number>"]}
					return={["Number"]}
					validCode={validCode}
					inValidCode={inValidCode}
					info={"Implemented using JavaScript's built-in <b>reduce</b> function."}
				/>

			</div>
    );
  }
}

