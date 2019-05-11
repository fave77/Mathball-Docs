import React, { Component } from "react";
import Content from "./Content";

const validCode=
`M.popcount(13);   // 3
M.popcount(6);         // 2`;

const inValidCode=
`/*
* TypeError: Invalid argument received: <argument>
* "popcount()" only accept an integer value.
*/
M.popcount(1, 2);
M.popcount("one");`;


export default class SetBits extends Component {
  render() {
    return (
			<div className="tab-pane fade" id="set-bits" role="tabpanel" aria-labelledby="set-bits-tab">

				<Content
					title={"Set Bits"}
					description={"The <b>M.popcount()</b> function returns the count of the total number of 1s present in the binary representation of an integer."}
					syntax={["M.popcount(value)"]}
					arguments={["Number"]}
					return={["Non-negative Number"]}
					validCode={validCode}
					inValidCode={inValidCode}
					info={"Implemented using JavaScript's <b>while()</b> function."}
				/>

			</div>
    );
  }
}

