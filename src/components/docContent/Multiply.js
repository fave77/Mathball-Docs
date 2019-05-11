import React, { Component } from "react";
import Content from "./Content";

const validCode=
`M.mul(2, 3);    // 6
M.mul(4.5, 2.3);  // 10.35
M.mul("20", "10");   // "200"
M.mul([12, 9], [6, 6]);      // [72, 54]
M.mul([[1,2], [3,4]], [[2, 0], [1, 2]]);     // [[4, 4], [10, 8]]

//const a = new M.Complex(7, 3);
//const b = new M.Complex(4, 6);

M.mul(a,b);             // {re: 28, im: 18}`;

const inValidCode=
`/*
* TypeError: Invalid argument received: <argument>
*/
M.mul(true, false);

/*
* TypeError: Invalid argument received: <argument>
* "mul()" only accepts only 2 parameters!
*/
M.mul();
M.mul(1);
M.mul(1.3);
M.mul("4");
M.mul([5, 3, 4]);
M.mul([[5]]);
/*
* TypeError: Invalid argument received: <argument>
* "function" only accepts parameters of similar types!
*/

/*Numbers*/
M.mul(5, "1");
M.mul(1.2, "2");

/*Strings*/
M.mul("6", 1);

/*Arrays*/
M.mul([1,2,3,4], ["1","2","3","4"]);
M.mul([[1, 2]], [["4", "5"]]);

/*Complex Objects*/

M.mul(a, b, {p: 30, q: 40});

/*
* TypeError: Invalid argument received: <argument>
* "function" only accepts parameters of similar length!
*/

/*Arrays*/
M.mul([1,2,3,4,5], [1,2,3,4]);
M.mul([[1]], [[1,2,3]]);`;


export default class Multiply extends Component {
  render() {
    return (
			<div className="tab-pane fade" id="multiply" role="tabpanel" aria-labelledby="multiply-tab">

				<Content
					title={"Multiply"}
					description={"The <b>M.mul()</b> function returns the product of two Numbers, Arrays, Strings, or Complex Objects."}
					syntax={["M.mul(value1, value2)"]}
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

