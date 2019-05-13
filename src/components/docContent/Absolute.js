import React, { Component } from "react";
import Content from "./Content";

const validCode=
`M.abs(-14);    // 14
M.abs(-12.24);  // 12.24
M.abs("-20");   // "20"
M.abs([12, 9]]);      // 0
M.abs([[3, 2], [5, 4]]);     // 2

//const a = new M.Complex(7, 3);
//const b = new M.Complex(4, 6);

M.abs(a);     // 7.62`;


const inValidCode=
`/*
* TypeError: Invalid argument received: <argument>
*/
M.abs(true, false);

/*
* TypeError: Invalid argument received: <argument>
*/
M.abs();
M.abs(1, 3);
M.abs("4", "3");
M.abs([5, 3, 4], [1, 2, 3]);
M.abs([[5]], [[4]]);
M.abs(a, b);
/*
* TypeError: Invalid argument received: <argument>
* "function" only accepts parameters of similar length!
*/

/*Arrays*/
M.abs([1,2,3,4,5], [1,2,3,4]);
M.abs([[1]], [[1,2,3]]);`;


export default class Absolute extends Component {
  render() {

    return (
			<div className="tab-pane fade show active" id="absolute" role="tabpanel" aria-labelledby="absolute-tab">

				<Content
					title={"Abs"}
					description={"The <b>M.abs()</b> function returns the absolute value of a Number, Array, String, or Complex Object."}
					syntax={["M.abs(value)"]}
					arguments={["Numbers", "Strings", "Arrays <Number> <Array>", "Objects <Complex>"]}
					return={["Numbers", "String (in case of string inputs)"]}
					validCode={validCode}
					inValidCode={inValidCode}
					info={"Implemented using JavaScript's built-in <b>reduce</b>, <b>forEach</b>, <b>toString</b>, <b>filter</b>, <b>map</b> function."}
				/>

			</div>
    );
  }
}

