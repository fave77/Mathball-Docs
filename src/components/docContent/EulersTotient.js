import React, { Component } from "react";
import Content from "./Content";

const validCode=
`M.phi(9);                                // 6
M.phi(0);                                // 0
M.phi(10)                                // 4 `;

const inValidCode=
`/*
* TypeError: Invalid argument received: <argument>
* "phi()" only accept a non-negative-integer!
*/
M.phi("31")
M.phi(true)
M.phi(31.101996)
M.phi(-20)
M.phi(0)`;


export default class EulersTotient extends Component {
  render() {
    return (
			<div className="tab-pane fade" id="eulers-totient" role="tabpanel" aria-labelledby="eulers-totient-tab">

				<Content
					title={"Euler's Totient"}
					description={"The <b>M.phi()</b> function for an input n returns count of numbers in {1, 2, 3, …, n} that are relatively prime to n, i.e., the numbers whose GCD (Greatest Common Divisor) with n is 1."}
					syntax={["M.phi(num)"]}
					arguments={["Number"]}
					return={["Number"]}
					validCode={validCode}
					inValidCode={inValidCode}
					info={"Implemented using Euler’s product formula."}
				/>

			</div>
    );
  }
}

