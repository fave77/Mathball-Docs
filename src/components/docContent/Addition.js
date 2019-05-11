import React, { Component } from "react";
import Content from "./Content";

const validCode=
`M.add(1, 2, 3, 4, 5, 6);    // 21
M.add(1.2, 2.3, 3.4, 4.5);  // 11.4
M.add("1", "2, "3", "4");   // "10"
M.add([2, 4], [2, 4]);      // [4, 8]
M.add([[1, 2, 3]], [[1, 2, 3]]);   // [[2, 4, 6]]`

const inValidCode=
`/*
* TypeError: Invalid argument received: <argument>
*/
M.add(true, false);

/*
* TypeError: Invalid argument received: <argument>
* "add()" only accepts 2 or more parameters!
*/
M.add();
M.add(1);
M.add(1.3);
M.add("4");
M.add([5, 3, 4]);
M.add([[5]]);

/*
* TypeError: Invalid argument received: <argument>
* "function" only accepts parameters of similar types!
*/

/*Numbers*/
M.add(5, 2, "1", 7);
M.add(1.2, 1.4, [1,2,3], 5.6);

/*Strings*/
M.add("1", "2", "3", 4, 5);

/*Arrays*/
M.add([1,2,3,4], ["1","2","3","4"]);
M.add([[1, 2]], [[3, 4]], [["4", "5"]]);

/*Complex Objects*/

//const a = new M.Complex(4,3);
//const b = new M.Complex(5,4);
M.add(a, b, {p: 30, q: 40});

/*
* TypeError: Invalid argument received: <argument>
* "function" only accepts parameters of similar length!
*/

/*Arrays*/
M.add([1,2,3,4,5], [1,2,3,4]);
M.add([[1]], [[1,2,3]], [[8]]);`;


export default class Addition extends Component {
  render() {
    return (
			<div className="tab-pane fade" id="addition" role="tabpanel" aria-labelledby="addition-tab">

				<Content
					title={"Add"}
					description={"The <b>M.add()</b> function returns the sum of two or more Numbers, Arrays, Strings, or Complex Objects."}
					syntax={["M.add(value1, value2, ...)"]}
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

