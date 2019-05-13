import React, { Component } from "react";
import Content from "./Content";

const validCode=
`M.length(2345);         // 4
M.length(123.456);      // 6
M.length([1, 2, 3, 1, 2, 4, 5, 1]);   // 8
M.length("helloworld");  // 10
M.length({"lorem": "ipsum", "hello": "world"});    // 2`;

const inValidCode=
`/*
* TypeError: Invalid argument received: <argument>
* "length()" only accept either a real number,
*  string, object or array!
*/
M.length();
M.length(true);`;


export default class Length extends Component {
  render() {
    return (
			<div className="tab-pane fade" id="length" role="tabpanel" aria-labelledby="length-tab">

				<Content
					title={"Length"}
					description={"The <b>M.length()</b> function returns the length of argument provided."}
					syntax={["M.length (value)"]}
					arguments={["Number Array String Object"]}
					return={["Number"]}
					validCode={validCode}
					inValidCode={inValidCode}
					info={"Implemented using JavaScript's built-in <b>split</b>, <b>toString</b>, <b>splice</b>, <b>indexOf</b>, <b>keys</b> functions"}
				/>

			</div>
    );
  }
}

