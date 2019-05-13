import React, { Component } from "react";
import Highlight from "react-highlight";
import "highlight.js/styles/github.css";


export default class Convert extends Component {
  render() {

    return (
			<div className="tab-pane fade" id="convert" role="tabpanel" aria-labelledby="convert-tab">

				<h1>Convert</h1>
				<p>The <b>M.convert()</b> function returns a number which has been converted from degree to radian or vice versa.</p>

				<h3>Syntax</h3>
				<p><span>M.permute(argument1, argument2, argument3)</span></p>

				<h3>Arguments1</h3>
				<p><span>Number</span></p>

				<h3>Arguments2</h3>
				<p><span>Object</span></p>

				<h3>Arguments3</h3>
				<p><span>Number</span></p>

				<h3>Return</h3>
				<p><span>Number</span></p>

				<h3>Examples</h3>
				<p><i>Valid:</i></p>
				<Highlight language="javascript" >
					{
`M.convert(60, {from: "degree", to: "radian"})   // 1.0471975511965976
 M.convert(1.0471975511965976, {from: "radian", to: "degree"})   // 59.99999999999999
 M.convert(180, {from: "degree", to: "radian"}, 0)   // 3.141592653589793
 M.convert(180, {from: "degree", to: "radian"}, 8)   // 3.14159265
 M.convert(1.309, {from: "radian", to: "degree"})   // 75.00017538262475
 M.convert(1.309, {from: "radian", to: "degree"}, 0)   // 75.00017538262475
 M.convert(1.309, {from: "radian", to: "degree"}, 6)   // 75.000175`}
				</Highlight>

				<p><i>Invalid:</i></p>
				<Highlight language="javascript" >
					{
`/*
  * TypeError: Invalid argument received: <argument>
  * "convert()" only accept a number!
  */
 M.convert("31", {from: "degree", to: "radian"});
 M.convert(true, {from: "degree", to: "radian"});

 /*
  * TypeError: Invalid argument received: <argument>
  * in convert() must be an object!
  */
 M.convert(60, true, 6);

 /*
  * ReferenceError: Invalid argument received: <argument>
  * in convert() must contain to and from fields!
  */
 M.convert(180, {from: "radian", an: "degree"});
 M.convert(180, {a: "radian", an: "degree"}, 6);

 /*
  * TypeError: Invalid argument received: <argument>
  * "convert()" only accept a non-negative integer!
  */
 M.convert(31, {from: "degree", to: "radian"}, true);
 M.convert(60, {from: "degree", to: "radian"}, "a");`}
				</Highlight>

				<h3>Info</h3>
				<p><span>Implemented using JavaScript"s built-in <b>parseFloat</b>,<b>toFixed</b>,<b>hasOwnProperty</b> functions.</span></p>

			</div>
    );
  }
}

