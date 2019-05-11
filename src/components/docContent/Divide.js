import React, { Component } from "react";
import Content from "./Content";

const validCode=
`M.div(4, 2);    // 2
M.div(8.4, 2.0);  // 4.2
M.div("8.4", "2.0");   // "4.2"
M.div([12, 9], [6, 3]);      // [2, 3]
M.div([[4, 3],[3, 2]], [[4, 3], [3,2]]);     // [[1, 0], [0, 1]]

//const a = new M.Complex(7, 3);
//const b = new M.Complex(4, 6);

M.div(a,b);      // {re: 0.77, im: -0.58}`;


const inValidCode=
`/*
* TypeError: Invalid argument received: <argument>
*/
M.div(true, false);

/*
* TypeError: Invalid argument received: <argument>
* "div()" only accepts only 2 parameters!
*/
M.div();
M.div(1);
M.div(1.3);
M.div("4");
M.div([5, 3, 4]);
M.div([[5]]);

/*
* TypeError: Invalid argument received: <argument>
* "function" only accepts parameters of similar types!
*/

/*Numbers*/
M.div(5, "1");
M.div(1.2, "2");

/*Strings*/
M.div("6", 1);

/*Arrays*/
M.div([1,2,3,4], ["1","2","3","4"]);
M.div([[1, 2]], [["4", "5"]]);

/*Complex Objects*/

M.div(a, b, {p: 30, q: 40});
M.div(a, b, {p: 30, q: 40});

/*
 * TypeError: Invalid argument received: <argument>
 * "function" only accepts parameters of similar length!
 */

/*Arrays*/
M.div([1,2,3,4,5], [1,2,3,4]);
M.div([[1]], [[1,2,3]]);`;


export default class Divide extends Component {
  render() {
    return (
			<div className="tab-pane fade" id="divide" role="tabpanel" aria-labelledby="divide-tab">

				<Content
					title={"Div"}
					description={"The <b>M.div()</b> function returns the division of two Numbers, Arrays, Strings, or Complex Objects."}
					syntax={["M.div(value1, value2)"]}
					arguments={["Numbers", "Strings", "Arrays <Number> <Array>", "Objects <Complex>"]}
					return={["Number (in case of number inputs)", "String (in case of string inputs)", "Array (in case of array inputs)", "Object (in case of object inputs)"]}
					validCode={validCode}
					inValidCode={inValidCode}
					info={"Implemented using JavaScript's built-in <b>reduce</b>, <b>forEach</b>, <b>toString</b>, <b>filter</b>, <b>map</b> function."}
				/>

			</div>
    );
  }
}

