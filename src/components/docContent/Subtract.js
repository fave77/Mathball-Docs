import React, { Component } from "react";
import Content from "./Content";

const validCode=
`M.sub(50, 29);    // 21
M.sub(4.5, 2.3);  // 2.2
M.sub('20', '10');   // '10'
M.sub([12, 4], [2, 3]);      // [10, 1]
M.sub([[5, 3]], [[4, 1]]);     // [[1, 2]]

//const a = new M.Complex(7, 3);
//const b = new M.Complex(4, 6);

M.sub(a,b);             // {re: 3, im: -3}`;

const inValidCode=
`/*
* TypeError: Invalid argument received: <argument>
*/
M.sub(true, false);

/*
* TypeError: Invalid argument received: <argument>
* 'sub()' only accepts only 2 parameters!
*/
M.sub();
M.sub(1);
M.sub(1.3);
M.sub('4');
M.sub([5, 3, 4]);
M.sub([[5]]);

/*
* TypeError: Invalid argument received: <argument>
* 'function' only accepts parameters of similar types!
*/

/*Numbers*/
M.sub(5, '1');
M.sub(1.2, '2');

/*Strings*/
M.sub('6', 1);

/*Arrays*/
M.sub([1,2,3,4], ['1','2','3','4']);
M.sub([[1, 2]], [['4', '5']]);

/*Complex Objects*/

M.sub(a, b, {p: 30, q: 40});

/*
* TypeError: Invalid argument received: <argument>
* 'function' only accepts parameters of similar length!
*/

/*Arrays*/
M.sub([1,2,3,4,5], [1,2,3,4]);
M.sub([[1]], [[1,2,3]]);`;


export default class Subtract extends Component {
  render() {
    return (
			<div className="tab-pane fade" id="subtract" role="tabpanel" aria-labelledby="subtract-tab">

				<Content
					title={"Subtract"}
					description={"The <b>M.sub()</b> function returns the difference of two Numbers, Arrays, Strings, or Complex Objects."}
					syntax={["M.sub(value1, value2)"]}
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

