import React, { Component } from "react";
import Highlight from "react-highlight";
import "highlight.js/styles/github.css";


export default class ComplexNumber extends Component {
  render() {

    return (
			<div className="tab-pane fade" id="complex-number" role="tabpanel" aria-labelledby="complex-number-tab">

				<h1>Complex-Number</h1>
				<p>The <b>M.Complex()</b> allows to do various complex number related operations.</p>

				<h3>Syntax</h3>
				<p><span>new M.Complex(argument1, argument2)</span></p>

				<h3>Arguments1</h3>
				<p><span>Number</span></p>

				<h3>Arguments2</h3>
				<p><span>Number</span></p>

				<h3>Return</h3>
				<p><span>Object</span></p>

				<h3>Examples</h3>
				<Highlight language="javascript" >
					{"const a = new M.Complex(3, 2);"}
				</Highlight>

				<h3>Info</h3>
				<p>Implemented using JavaScript"s built-in <b>class</b></p>

				<h3>Properties</h3>
				<ul>
					<li><b>re</b> - Returns the real value of the complex number.</li>
					<li><b>img</b> - Returns the imaginary value of the complex number.</li>
					<li><b>conj</b> - Returns an object which is the conjugate of the given complex number.</li>
				</ul>

				<hr />

				<h3>Examples</h3>
				<p><i>Valid:</i></p>
				<Highlight language="javascript" >
					{
`const a = new M.Complex(3, 2);
 const b = new M.Complex(2, 1);

 console.log(a.re)      // 3
 console.log(a.im)      // 2
 console.log(a.conj)     // Complex { r: 3, i: -2 }
 console.log(a.conj.re)     // 3
 console.log(a.conj.im)     // -2`}
				</Highlight>

				<p><i>Invalid:</i></p>
				<Highlight language="javascript" >
					{
`/*
  * TypeError: Invalid argument received: <argument>
  * "Complex()"  only accepts an integer or an object
  */
 M.Complex("4", "3");
 M.Complex([3]);
 M.Complex(["13", "21"]);`}
				</Highlight>

				<h3>Methods</h3>
				<ul>
					<li><b>abs</b> - Returns a number which is the absolute value of the complex number.</li>
					<li><b>add</b> - Returns an object after adding either two complex numbers or a complex number with real number or a complex number with an imaginary number.</li>
					<li><b>sub</b> - Returns an object after subtracting either two complex numbers or a complex number with real number or a complex number with an imaginary number.</li>
					<li><b>multiply</b> - Returns an object after multiplying either two complex numbers or a complex number with real number or a complex number with an imaginary number.</li>
					<li><b>divide</b> - Returns an object after dividing either two complex numbers or a complex number with real number or a complex number with an imaginary number.</li>
				</ul>

				<hr />

				<h3>Syntax</h3>
				<p><span>a.abs()</span></p>

				<h3>Return</h3>
				<p><span>Number</span></p>

				<h3>Examples</h3>
				<Highlight language="javascript" >
					{
`const a = new M.Complex(3, 2);

console.log(a.abs());     // 3.61`}
				</Highlight>

				<h3>Info:</h3>
				<p>Implemented using JavaScript"s built-in <b>parseFloat</b>, <b>sqrt</b>, <b>pow</b> functions.</p>

				<hr />

				<h3>Syntax</h3>
				<p><span>a.add(b)</span></p>

				<h3>Arguments</h3>
				<p><span>Object</span></p>

				<h3>Return</h3>
				<p><span>Object</span></p>

				<h3>Examples</h3>
				<p><i>Valid:</i></p>
				<Highlight language="javascript" >
					{
`const add1 = a.add(5)

console.log(add1)      // Complex { r: 8, i: 2 }
console.log(add1.re)      // 8
console.log(add1.im)     // 2

const add2 = a.add(b)

console.log(add2.re)      // 5
console.log(add2.im)      // 3
console.log(add2.abs())     // 5.83`}
				</Highlight>

				<p><i>Invalid:</i></p>
				<Highlight language="javascript" >
					{
`/*
  * TypeError: Invalid argument received: <argument>
  * "add()"  only accepts an integer or an object
  */
 const add2 = a.add("5");
 const add2 = a.add([5]);`}
				</Highlight>

				<h3>Info:</h3>
				<p>Implemented using JavaScript"s built-in <b>isInteger</b> functions.</p>

				<hr />

				<h3>Syntax</h3>
				<p><span>a.sub(b)</span></p>

				<h3>Arguments</h3>
				<p><span>Object</span></p>

				<h3>Return</h3>
				<p><span>Object</span></p>

				<h3>Examples</h3>
				<p><i>Valid:</i></p>
				<Highlight language="javascript" >
					{
`const sub1 = a.sub(1)

console.log(sub1)      // Complex { r: 2, i: 2 }
console.log(sub1.re)      // 2
console.log(sub1.im)     // 2

const sub2 = a.sub(b)

console.log(sub2.re)      // 1
console.log(sub2.im)      // 1
console.log(sub2.abs())     // 1.41`}
				</Highlight>

				<p><i>Invalid:</i></p>
				<Highlight language="javascript" >
					{
`/*
  * TypeError: Invalid argument received: <argument>
  * "sub()"  only accepts an integer or an object
  */
 const sub2 = a.sub("5");
 const sub2 = a.sub([5]);`}
				</Highlight>

				<h3>Info:</h3>
				<p>Implemented using JavaScript"s built-in <b>isInteger</b> functions.</p>

				<hr />

				<h3>Syntax</h3>
				<p><span>a.multiply(b)</span></p>

				<h3>Arguments</h3>
				<p><span>Object</span></p>

				<h3>Return</h3>
				<p><span>Object</span></p>

				<h3>Examples</h3>
				<p><i>Valid:</i></p>
				<Highlight language="javascript" >
					{
`const mul1 = a.multiply(1)

console.log(mul1)      // Complex { r: 2, i: 2 }
console.log(mul1.re)      // 2
console.log(mul1.im)     // 2

const mul2 = a.multiply(b)

console.log(mul2)      // Complex { r: 4, i: 7 }
console.log(mul2.re)      // 4
console.log(mul2.im)      // 7
console.log(mul2.abs())     // 8.06`}
				</Highlight>

				<p><i>Invalid:</i></p>
				<Highlight language="javascript" >
					{
`/*
  * TypeError: Invalid argument received: <argument>
  * "multiply()"  only accepts an integer or an object
  */
 const mul2 = a.multiply("5");
 const mul2 = a.multiply([5]);`}
				</Highlight>

				<h3>Info:</h3>
				<p>Implemented using JavaScript"s built-in <b>isInteger</b> functions.</p>

				<hr />

				<h3>Syntax</h3>
				<p><span>a.divide(b)</span></p>

				<h3>Arguments</h3>
				<p><span>Object</span></p>

				<h3>Return</h3>
				<p><span>Object</span></p>

				<h3>Examples</h3>
				<p><i>Valid:</i></p>
				<Highlight language="javascript" >
					{
`const div1 = a.divide(2)

console.log(div1)      // Complex { r: 1.5, i: 1 }
console.log(div1.re)      // 1.5
console.log(div1.im)     // 1

const div2 = a.divide(b)

console.log(div2)      // Complex { r: 1.6, i: 0.2 }
console.log(div2.re)      // 1.6
console.log(div2.im)      // 0.2
console.log(div2.abs())     // 1.61`}
				</Highlight>

				<p><i>Invalid:</i></p>
				<Highlight language="javascript" >
					{
`/*
  * TypeError: Invalid argument received: <argument>
  * "divide()"  only accepts an integer or an object
  */
 const div2 = a.divide("5");
 const div2 = a.divide([5]);`}
				</Highlight>

				<h3>Info:</h3>
				<p>Implemented using JavaScript"s built-in <b>isInteger</b> functions.</p>

			</div>
    );
  }
}

